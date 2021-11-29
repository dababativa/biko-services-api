import { Test, TestingModule } from '@nestjs/testing';
import { SecurityServicesController } from './security-services.controller';
import { SecurityServicesService } from './security-services.service';

describe('SecurityServicesController', () => {
  let controller: SecurityServicesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SecurityServicesController],
      providers: [SecurityServicesService],
    }).compile();

    controller = module.get<SecurityServicesController>(SecurityServicesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
