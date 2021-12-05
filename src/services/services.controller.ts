/* eslint-disable prettier/prettier */
import { HttpService } from '@nestjs/axios';
import {
  BadRequestException,
  Body,
  Controller,
  NotFoundException,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { MaintenanceServicesService } from 'src/maintenance-services/maintenance-services.service';
import { SecurityServicesService } from 'src/security-services/security-services.service';
import { ServiceInformationType } from 'src/service-information/service-information-type.enum';
import { ServiceInformationService } from 'src/service-information/service-information.service';
import { BookServiceDto } from './dto/book-service.dto';
import { ChangeStateDto } from './dto/change-state.dto';
import { RateServiceDto } from './dto/rate-service.dto';
import { ServicesService } from './services.service';

@Controller('services')
export class ServicesController {
  constructor(
    private servicesService: ServicesService,
    private serviceInformationService: ServiceInformationService,
    private securityServicesService: SecurityServicesService,
    private maintenanceServicesService: MaintenanceServicesService,
    private httpService: HttpService,
  ) {}
  usersMicroservice = 'http://3.145.65.26:3000';

  @Post('/:id/book-service')
  async bookService(
    @Param('id') id: number,
    @Body() bookServiceDto: BookServiceDto,
  ) {
    const { type, fkCyclist } = bookServiceDto;
    let user = await this.httpService
      .get(`${this.usersMicroservice}/users/${fkCyclist}`)
      .toPromise()
      .catch((e) => {
        return e.response.data;
      })
      .then((data) => data.data);
    if (user) {
      const serviceInformation =
        await this.serviceInformationService.getServiceInformationById(id);
      if (serviceInformation) {
        if (serviceInformation.type == type) {
          if (type === ServiceInformationType.MAINTENANCE) {
            return await this.maintenanceServicesService.book(bookServiceDto);
          } else {
            return this.securityServicesService.book(bookServiceDto);
          }
        } else {
          throw new BadRequestException(
            'Booking type and service information type do not match',
          );
        }
      } else {
        throw new NotFoundException(
          `Service information with id ${id} not found`,
        );
      }
    } else {
      throw new NotFoundException(`Cyclist with id ${fkCyclist} not found`);
    }
  }
  @Patch('/:id/change-state')
  async changeState(
    @Param('id') id: number,
    @Body() changeStateDto: ChangeStateDto,
  ) {
    const { type } = changeStateDto;
    if (type === ServiceInformationType.MAINTENANCE) {
      return await this.maintenanceServicesService.changeState(
        changeStateDto,
        id,
      );
    } else {
      return await this.securityServicesService.changeState(changeStateDto, id);
    }
  }

  @Patch('/:id/rate')
  async rateService(
    @Param('id') id: number,
    @Body() rateServiceDto: RateServiceDto,
  ) {
    const { type } = rateServiceDto;
    if (type === ServiceInformationType.MAINTENANCE) {
      return await this.maintenanceServicesService.rateService(
        rateServiceDto,
        id,
      );
    } else {
      return await this.securityServicesService.rateService(rateServiceDto, id);
    }
  }
}
