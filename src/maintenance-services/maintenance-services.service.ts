/* eslint-disable prettier/prettier */
import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { BookMaintenanceServiceDto } from './dto/book-maintenance-service.dto';
import { CreateMaintenanceServiceDto } from './dto/create-maintenance-service.dto';
import { UpdateMaintenanceServiceDto } from './dto/update-maintenance-service.dto';

@Injectable()
export class MaintenanceServicesService {

  

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
    fkCyclist: number,
    bookMaintenanceServiceDto: BookMaintenanceServiceDto,
  ) {
    
    return `This action will book a Maintenance service for ${fkCyclist} and ${bookMaintenanceServiceDto}`;
  }
}
