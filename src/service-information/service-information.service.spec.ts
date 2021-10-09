import { Test, TestingModule } from '@nestjs/testing';
import { ServiceInformationService } from './service-information.service';

describe('ServiceInformationService', () => {
  let service: ServiceInformationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ServiceInformationService],
    }).compile();

    service = module.get<ServiceInformationService>(ServiceInformationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
