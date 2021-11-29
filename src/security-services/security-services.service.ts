import { Injectable } from '@nestjs/common';
import { BookSecurityServiceDto } from './dto/book-security-service.dto';
import { CreateSecurityServiceDto } from './dto/create-security-service.dto';
import { UpdateSecurityServiceDto } from './dto/update-security-service.dto';

@Injectable()
export class SecurityServicesService {
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

  book(fkCyclist: number, bookSecurityServiceDto: BookSecurityServiceDto){
    return `This action will book a security service for ${fkCyclist} and ${bookSecurityServiceDto}`;
  }
}
