/* eslint-disable prettier/prettier */
import { ServiceInformation } from 'src/service-information/service-information.entity';
import { EntityRepository, Repository } from 'typeorm';
import { BookMaintenanceServiceDto } from './dto/book-maintenance-service.dto';
import { MaintenanceService } from './entities/maintenance-service.entity';

@EntityRepository(MaintenanceService)
export class ServiceInformationRepository extends Repository<MaintenanceService> {
  // async bookMaintenanceService(
  //   bookMaintenanceService: BookMaintenanceServiceDto,
  //   fkCyclist: any,
  //   fkServiceInformation: ServiceInformation,
  // ): Promise<ServiceInformation> {
  //   const serviceInformation = this.create({ fee, type });
  //   await this.save(serviceInformation);
  //   serviceInformation.fkBiko = user;
  //   return serviceInformation;
  // }
}
