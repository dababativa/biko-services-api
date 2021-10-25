/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateServiceInformationDto } from './dto/create-service-information.dto';
import { ServiceInformation } from './service-information.entity';
import { ServiceInformationRepository } from './service-information.repository';

@Injectable()
export class ServiceInformationService {


 constructor(
    @InjectRepository(ServiceInformationRepository)
    private serviceInformationRepository: ServiceInformationRepository){}



    async getServiceInformationById(id:number):Promise<ServiceInformation>{
        const serviceInformation = await this.serviceInformationRepository.findOne(id)
        console.log(serviceInformation)
        if (!serviceInformation){
            throw new NotFoundException(`Service Information with id ${id} not found`);
        } 
        return serviceInformation;
    }

    async getServiceInformation():Promise<ServiceInformation[]>{
        const serviceInformation = await this.serviceInformationRepository.find()
        return serviceInformation;
    }

    async createServiceInformation(createServiceInformationDto: CreateServiceInformationDto): Promise<ServiceInformation>{
        return this.serviceInformationRepository.createServiceInformation(createServiceInformationDto);
    }

}
