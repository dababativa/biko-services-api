/* eslint-disable prettier/prettier */
import { EntityRepository, Repository } from 'typeorm';
import { CreateServiceInformationDto } from './dto/create-service-information.dto';
import { ServiceInformation } from './service-information.entity';

@EntityRepository(ServiceInformation)
export class ServiceInformationRepository extends Repository<ServiceInformation> {
  async createServiceInformation(
    createServiceInformationDto: CreateServiceInformationDto,
    user,
  ): Promise<ServiceInformation> {
    const { fee, type } = createServiceInformationDto;
    const serviceInformation = this.create({ fee, type, fkBiko: user.id });
    await this.save(serviceInformation);
    console.log(user)
    serviceInformation.fkBiko = user;
    console.log(serviceInformation)
    return serviceInformation;
  }
}
