/* eslint-disable prettier/prettier */
import { HttpService } from '@nestjs/axios';
import { BadRequestException, Body, Controller, NotFoundException, Param, Post } from '@nestjs/common';
import { MaintenanceServicesService } from 'src/maintenance-services/maintenance-services.service';
import { SecurityServicesService } from 'src/security-services/security-services.service';
import { ServiceInformationType } from 'src/service-information/service-information-type.enum';
import { ServiceInformationService } from 'src/service-information/service-information.service';
import { BookServiceDto } from './dto/book-service.dto';
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
  usersMicroservice = "http://3.145.33.186:3000"

  @Post('/:id/book-service')
  async bookService(
    @Param('id') id: number,
    @Body() bookServiceDto: BookServiceDto,
  ) {
    const {
      type,
      fkCyclist,
      bookSecurityServiceDto,
      bookMaintenanceServiceDto,
    } = bookServiceDto;
    const user = await this.httpService.get(
        `${this.usersMicroservice}/users/${fkCyclist}`,
      ).toPromise().catch((e)=>{
          return e.response.data
      }).then((data) => data.data)
      if (user){
        const serviceInformation = await this.serviceInformationService.getServiceInformationById(id);
        console.log(serviceInformation)
        if(serviceInformation){
          if( serviceInformation.type == type){
            if (type === ServiceInformationType.MAINTENANCE) {
              return await this.maintenanceServicesService.book(
                fkCyclist,
                bookMaintenanceServiceDto,
              );
            } else {
              return this.securityServicesService.book(
                fkCyclist,
                bookSecurityServiceDto,
              );
            }
          

          } else {
            throw new BadRequestException("Booking type and service information type do not match")
          }
        } else {
          throw new NotFoundException(`Service information with id ${id} not found`)
        }
        } else{
            throw new NotFoundException(`Cyclist with id ${fkCyclist} not found`)
            
        }
    }
}
