import { Test, TestingModule } from '@nestjs/testing';
import { ServiceInformationController } from './service-information.controller';

describe('ServiceInformationController', () => {
  let controller: ServiceInformationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ServiceInformationController],
    }).compile();

    controller = module.get<ServiceInformationController>(ServiceInformationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
