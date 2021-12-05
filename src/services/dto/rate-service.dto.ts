/* eslint-disable prettier/prettier */
import { Transform } from 'class-transformer';
import { IsEnum, IsNumber, IsPositive} from 'class-validator';
import { ServiceInformationType } from 'src/service-information/service-information-type.enum';

export class RateServiceDto {
  
  @IsEnum(ServiceInformationType)
  type: ServiceInformationType;

  @Transform(({value})=>parseFloat(value))
  @IsNumber()
  @IsPositive()
  rating: number;

  
}
