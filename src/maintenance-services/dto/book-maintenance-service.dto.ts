/* eslint-disable prettier/prettier */
import { Transform } from 'class-transformer';
import { IsNumber, IsPositive, IsString } from 'class-validator';

export class BookMaintenanceServiceDto {
    @IsString()
    startingTime: string;
    @IsString()
    endTime: string;
}
