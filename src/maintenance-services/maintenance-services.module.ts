import { Module } from '@nestjs/common';
import { MaintenanceServicesService } from './maintenance-services.service';
import { MaintenanceServicesController } from './maintenance-services.controller';
import { HttpModule } from '@nestjs/axios';

@Module({
  controllers: [MaintenanceServicesController],
  providers: [MaintenanceServicesService],
  exports: [MaintenanceServicesService],
  imports: [HttpModule],
})
export class MaintenanceServicesModule {}
