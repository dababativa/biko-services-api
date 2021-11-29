/* eslint-disable prettier/prettier */
import { Transform } from 'class-transformer';
import { IsEnum, IsNumber, IsNumberString, IsOptional, IsPositive} from 'class-validator';
import { BookMaintenanceServiceDto } from 'src/maintenance-services/dto/book-maintenance-service.dto';
import { BookSecurityServiceDto } from 'src/security-services/dto/book-security-service.dto';
import { ServiceInformationType } from '../../service-information/service-information-type.enum';

export class BookServiceDto {
  @IsEnum(ServiceInformationType)
  type: ServiceInformationType;

  @Transform(({value})=>parseFloat(value))
  @IsNumber()
  @IsPositive()
  fkCyclist: number;

  @IsOptional()
  @Transform(({value})=> JSON.stringify(value))
  bookSecurityServiceDto: BookSecurityServiceDto;
  
  @IsOptional()
  @Transform(({value})=> JSON.stringify(value))
  bookMaintenanceServiceDto: BookMaintenanceServiceDto;
}
