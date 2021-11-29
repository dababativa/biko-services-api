import { Module } from '@nestjs/common';
import { SecurityServicesService } from './security-services.service';
import { SecurityServicesController } from './security-services.controller';

@Module({
  controllers: [SecurityServicesController],
  providers: [SecurityServicesService],
  exports: [SecurityServicesService]
})
export class SecurityServicesModule {}
