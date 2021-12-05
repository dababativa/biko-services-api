/* eslint-disable prettier/prettier */
import { ServiceInformation } from 'src/service-information/service-information.entity';
import { BookServiceDto } from 'src/services/dto/book-service.dto';
import { EntityRepository, Repository } from 'typeorm';
import { SecurityService } from './entities/security-service.entity';

@EntityRepository(SecurityService)
export class SecurityServiceRepository extends Repository<SecurityService> {
  async book(
    bookServiceDto: BookServiceDto
  ): Promise<SecurityService> {
  const {fkCyclist, type, startingTime, endTime, groupSize} = bookServiceDto;
  console.log(fkCyclist, type, startingTime, endTime, groupSize)
    const securityService = this.create({ 
      fkCyclist,
      type,
      startingTime,
      endTime,
      groupSize
      });
    await this.save(securityService);
    return securityService;
  }
}