import { Module } from '@nestjs/common';
import { MaintenanceServicesService } from './maintenance-services.service';
import { MaintenanceServicesController } from './maintenance-services.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MaintenanceServiceRepository } from './maintenance-services.repository';

@Module({
  controllers: [MaintenanceServicesController],
  providers: [MaintenanceServicesService],
  exports: [MaintenanceServicesService],
  imports: [TypeOrmModule.forFeature([MaintenanceServiceRepository])],
})
export class MaintenanceServicesModule {}
