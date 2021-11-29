/* eslint-disable prettier/prettier */
import { HttpService } from '@nestjs/axios';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateServiceInformationDto } from './dto/create-service-information.dto';
import { ServiceInformation } from './service-information.entity';
import { ServiceInformationRepository } from './service-information.repository';

@Injectable()
export class ServiceInformationService {

    usersMicroservice = "http://3.145.33.186:3000"

 constructor(
    @InjectRepository(ServiceInformationRepository)
    private serviceInformationRepository: ServiceInformationRepository,
    private httpService: HttpService,){}



    async getServiceInformationById(id:number):Promise<ServiceInformation>{
        const serviceInformation = await this.serviceInformationRepository.findOne(id)
        console.log(serviceInformation)
        if (!serviceInformation){
            throw new NotFoundException(`Service Information with id ${id} not found`);
        } 

        const user = await this.httpService.get(
            `${this.usersMicroservice}/users/${serviceInformation.fkBiko}`,
          ).toPromise().catch((e)=>{
              return e.response.data
          }).then((data) => data.data)
        if (user){
            serviceInformation.fkBiko = user
        }
        return serviceInformation;
    }

    async getServiceInformation(){
        const serviceInformation = await this.serviceInformationRepository.find()
        const serviceInformationWithBiko = []
        for (let service of serviceInformation){
            const user = await this.httpService.get(
                `${this.usersMicroservice}/users/${service.fkBiko}`,
              ).toPromise().catch((e)=>{
                  return e.response.data
              }).then((data) => data.data)
            // console.log(user)
            if (user){
                service.fkBiko = user
            }
            // console.log(serviceInformation)
            serviceInformationWithBiko.push(service)
        }
        console.log(serviceInformationWithBiko)
        return serviceInformationWithBiko;
    }

    async createServiceInformation(createServiceInformationDto: CreateServiceInformationDto, user): Promise<ServiceInformation>{
        return this.serviceInformationRepository.createServiceInformation(createServiceInformationDto, user);
    }

}
