import { EntityRepository, Repository } from "typeorm";
import { CreateServiceInformationDto } from "./dto/create-service-information.dto";
import { ServiceInformation } from "./service-information.entity";

@EntityRepository(ServiceInformation)
export class ServiceInformationRepository extends Repository<ServiceInformation> {
  async createServiceInformation(createServiceInformationDto: CreateServiceInformationDto): Promise<ServiceInformation> {
    const { fee, type } = createServiceInformationDto;
    const serviceInformation = this.create({ fee, type });
    await this.save(serviceInformation);
    return serviceInformation;
  }

}