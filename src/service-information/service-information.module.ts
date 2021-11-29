import { Module } from '@nestjs/common';
import { ServiceInformationService } from './service-information.service';
import { ServiceInformationController } from './service-information.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServiceInformationRepository } from './service-information.repository';
import { HttpModule } from '@nestjs/axios';

@Module({
  providers: [ServiceInformationService],
  controllers: [ServiceInformationController],
  imports: [
    TypeOrmModule.forFeature([ServiceInformationRepository]),
    HttpModule,
  ],
  exports: [ServiceInformationService],
})
export class ServiceInformationModule {}
