import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { MaintenanceServicesModule } from 'src/maintenance-services/maintenance-services.module';
import { SecurityServicesModule } from 'src/security-services/security-services.module';
import { ServiceInformationModule } from 'src/service-information/service-information.module';
import { ServicesController } from './services.controller';
import { ServicesService } from './services.service';

@Module({
  controllers: [ServicesController],
  providers: [ServicesService],
  imports: [SecurityServicesModule, MaintenanceServicesModule, HttpModule, ServiceInformationModule]
})
export class ServicesModule {}
