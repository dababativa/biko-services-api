import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServicesModule } from './services/services.module';
import { ServiceInformationModule } from './service-information/service-information.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MaintenanceServicesModule } from './maintenance-services/maintenance-services.module';
import { SecurityServicesModule } from './security-services/security-services.module';

@Module({
  imports: [
    ServicesModule,
    ServiceInformationModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'postgres',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'biko-services-api',
      autoLoadEntities: true,
      synchronize: true,
      // type: 'postgres',
      // host: 'localhost',
      // port: 5432,
      // username: 'postgres',
      // password: 'postgres',
      // database: 'biko-services-api',
      // autoLoadEntities: true,
      // synchronize: true,
    }),
    MaintenanceServicesModule,
    SecurityServicesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
