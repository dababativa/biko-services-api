import { Module } from '@nestjs/common';
import { SecurityServicesService } from './security-services.service';
import { SecurityServicesController } from './security-services.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SecurityServiceRepository } from './security-services.repository';

@Module({
  controllers: [SecurityServicesController],
  providers: [SecurityServicesService],
  exports: [SecurityServicesService],
  imports: [TypeOrmModule.forFeature([SecurityServiceRepository])],
})
export class SecurityServicesModule {}
