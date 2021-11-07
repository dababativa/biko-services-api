/* eslint-disable prettier/prettier */
import { Transform } from 'class-transformer';
import { IsEnum, IsNumber, IsNumberString, IsPositive} from 'class-validator';
import { ServiceInformationType } from '../service-information-type.enum';

export class CreateServiceInformationDto {
  @IsEnum(ServiceInformationType)
  type: ServiceInformationType;

  @Transform(({value})=>parseFloat(value))
  @IsNumber()
  @IsPositive()
  fee: number;

  @Transform(({value})=>parseFloat(value))
  @IsNumber()
  @IsPositive()
  fkBiko: number;
}
