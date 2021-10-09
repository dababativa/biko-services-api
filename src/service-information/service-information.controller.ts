import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateServiceInformationDto } from './dto/create-service-information.dto';
import { ServiceInformation } from './service-information.entity';
import { ServiceInformationService } from './service-information.service';

@Controller('service-information')
export class ServiceInformationController {


    constructor(private serviceInformationService: ServiceInformationService){

    }

    @Get("/:id")
    getServiceInformation(@Param("id") id: number): Promise<ServiceInformation> {
        return this.serviceInformationService.getServiceInformationById(id);
    }

    @Post()
    createServiceInformation(@Body() createServiceInformationDto: CreateServiceInformationDto):Promise<ServiceInformation>{
        return this.serviceInformationService.createServiceInformation(createServiceInformationDto) 
    }

}
