/* eslint-disable prettier/prettier */
import { IsEnum, IsPositive } from 'class-validator';
import { ServiceInformationType } from '../service-information-type.enum';

export class CreateServiceInformationDto {
  @IsEnum(ServiceInformationType)
  type: ServiceInformationType;

  @IsPositive()
  fee: number;
}
