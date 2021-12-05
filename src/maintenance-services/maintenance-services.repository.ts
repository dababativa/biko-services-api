/* eslint-disable prettier/prettier */
import { ServiceInformation } from 'src/service-information/service-information.entity';
import { BookServiceDto } from 'src/services/dto/book-service.dto';
import { ServiceType } from 'src/services/service-type.enum';
import { EntityRepository, Repository } from 'typeorm';
import { BookMaintenanceServiceDto } from './dto/book-maintenance-service.dto';
import { MaintenanceService } from './entities/maintenance-service.entity';

@EntityRepository(MaintenanceService)
export class MaintenanceServiceRepository extends Repository<MaintenanceService> {
  async book(
    bookServiceDto: BookServiceDto
  ): Promise<MaintenanceService> {
  const {fkCyclist, type, startingTime, endTime} = bookServiceDto;
    const maintenanceService = this.create({ 
      fkCyclist,
      type,
      startingTime,
      endTime
      });
    await this.save(maintenanceService);
    return maintenanceService;
  }
}
