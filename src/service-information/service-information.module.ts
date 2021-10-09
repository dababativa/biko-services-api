import { Module } from '@nestjs/common';
import { ServiceInformationService } from './service-information.service';
import { ServiceInformationController } from './service-information.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServiceInformationRepository } from './service-information.repository';

@Module({
  providers: [ServiceInformationService],
  controllers: [ServiceInformationController],
  imports: [TypeOrmModule.forFeature([ServiceInformationRepository])]
})
export class ServiceInformationModule {}
