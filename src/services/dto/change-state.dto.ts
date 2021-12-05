/* eslint-disable prettier/prettier */
import { Transform } from 'class-transformer';
import { IsEnum, IsNumber, IsNumberString, IsPositive, IsString} from 'class-validator';
import { ServiceInformationType } from 'src/service-information/service-information-type.enum';

export class ChangeStateDto {
  
  @IsEnum(ServiceInformationType)
  type: ServiceInformationType;

  @Transform(({value})=>parseFloat(value))
  @IsNumber()
  @IsPositive()
  state: number;

  
}
