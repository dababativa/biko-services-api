/* eslint-disable prettier/prettier */
import { HttpService } from '@nestjs/axios';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ServiceInformationType } from 'src/service-information/service-information-type.enum';
import { BookServiceDto } from 'src/services/dto/book-service.dto';
import { ChangeStateDto } from 'src/services/dto/change-state.dto';
import { RateServiceDto } from 'src/services/dto/rate-service.dto';
import { ServiceType } from 'src/services/service-type.enum';
import { BookMaintenanceServiceDto } from './dto/book-maintenance-service.dto';
import { CreateMaintenanceServiceDto } from './dto/create-maintenance-service.dto';
import { UpdateMaintenanceServiceDto } from './dto/update-maintenance-service.dto';
import { MaintenanceServiceRepository } from './maintenance-services.repository';

@Injectable()
export class MaintenanceServicesService {

  constructor(
    @InjectRepository(MaintenanceServiceRepository)
    private maintenanceServiceRepository: MaintenanceServiceRepository){}

  create(createMaintenanceServiceDto: CreateMaintenanceServiceDto) {
    return 'This action adds a new maintenanceService';
  }

  findAll() {
    return `This action returns all maintenanceServices`;
  }

  findOne(id: number) {
    return `This action returns a #${id} maintenanceService`;
  }

  update(id: number, updateMaintenanceServiceDto: UpdateMaintenanceServiceDto) {
    return `This action updates a #${id} maintenanceService`;
  }

  remove(id: number) {
    return `This action removes a #${id} maintenanceService`;
  }

  async book(
    bookServiceDto: BookServiceDto
  ) {
    return this.maintenanceServiceRepository.book(bookServiceDto)

  }

  async changeState(
    changeStateDto: ChangeStateDto,
    id: number
  ) {
    const { state } = changeStateDto
    const service = await this.maintenanceServiceRepository.findOne({id})
    if (service){
      service.state = state
      await this.maintenanceServiceRepository.save(service)
      return service
    } else {
      return new NotFoundException(`Maintenance service with id ${id} not found`)
    }
  }

  async rateService(
    rateServiceDto: RateServiceDto,
    id: number
  ) {
    const { rating } = rateServiceDto
    const service = await this.maintenanceServiceRepository.findOne({id})
    if (service){
      service.rating = rating
      await this.maintenanceServiceRepository.save(service)
      return service
    } else {
      return new NotFoundException(`Maintenance service with id ${id} not found`)
    }
  }

}
