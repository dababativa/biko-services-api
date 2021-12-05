/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BookServiceDto } from 'src/services/dto/book-service.dto';
import { ChangeStateDto } from 'src/services/dto/change-state.dto';
import { RateServiceDto } from 'src/services/dto/rate-service.dto';
import { BookSecurityServiceDto } from './dto/book-security-service.dto';
import { CreateSecurityServiceDto } from './dto/create-security-service.dto';
import { UpdateSecurityServiceDto } from './dto/update-security-service.dto';
import { SecurityServiceRepository } from './security-services.repository';

@Injectable()
export class SecurityServicesService {

  constructor(
    @InjectRepository(SecurityServiceRepository)
    private securityServiceRepository: SecurityServiceRepository){}

  create(createSecurityServiceDto: CreateSecurityServiceDto) {
    return 'This action adds a new securityService';
  }

  findAll() {
    return `This action returns all securityServices`;
  }

  findOne(id: number) {
    return `This action returns a #${id} securityService`;
  }

  update(id: number, updateSecurityServiceDto: UpdateSecurityServiceDto) {
    return `This action updates a #${id} securityService`;
  }

  remove(id: number) {
    return `This action removes a #${id} securityService`;
  }

  book(bookServiceDto: BookServiceDto){
    return this.securityServiceRepository.book(bookServiceDto);
  }

  async changeState(
    changeStateDto: ChangeStateDto,
    id: number
  ) {
    const { state } = changeStateDto
    const service = await this.securityServiceRepository.findOne({id})
    if (service){
      service.state = state
      await this.securityServiceRepository.save(service)
      return service
    } else {
      return new NotFoundException(`Security service with id ${id} not found`)
    }
  }

  async rateService(
    rateServiceDto: RateServiceDto,
    id: number
  ) {
    const { rating } = rateServiceDto
    const service = await this.securityServiceRepository.findOne({id})
    if (service){
      service.rating = rating
      await this.securityServiceRepository.save(service)
      return service
    } else {
      return new NotFoundException(`Security service with id ${id} not found`)
    }
  }
}
