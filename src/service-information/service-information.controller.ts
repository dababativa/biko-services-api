/* eslint-disable prettier/prettier */
import { HttpService } from '@nestjs/axios';
import { Body, Controller, Get, NotFoundException, Param, Post } from '@nestjs/common';
import { CreateServiceInformationDto } from './dto/create-service-information.dto';
import { ServiceInformation } from './service-information.entity';
import { ServiceInformationService } from './service-information.service';

@Controller('service-information')
export class ServiceInformationController {
  constructor(
    private serviceInformationService: ServiceInformationService,
    private httpService: HttpService,
  ) {}

  usersMicroservice = "http://3.145.65.26:3000"

  @Get('/:id')
  getServiceInformationById(
    @Param('id') id: number,
  ): Promise<ServiceInformation> {
    return this.serviceInformationService.getServiceInformationById(id);
  }

  @Get('')
  async getServiceInformation(){
    return await this.serviceInformationService.getServiceInformation();
  }

  @Post()
  async createServiceInformation(
    @Body() createServiceInformationDto: CreateServiceInformationDto,
  ) {
    console.log(createServiceInformationDto.fkBiko)
    const user = await this.httpService.get(
        `${this.usersMicroservice}/users/${createServiceInformationDto.fkBiko}`,
      ).toPromise().catch((e)=>{
          return e.response.data
      }).then((data) => data.data)
      console.log(user)
    if (user){
        return this.serviceInformationService.createServiceInformation(
            createServiceInformationDto, user);
    } else {
        throw new NotFoundException(`Biko with id ${createServiceInformationDto.fkBiko} not found`)
    }
    
  }
  
}
