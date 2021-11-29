import { Test, TestingModule } from '@nestjs/testing';
import { SecurityServicesService } from './security-services.service';

describe('SecurityServicesService', () => {
  let service: SecurityServicesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SecurityServicesService],
    }).compile();

    service = module.get<SecurityServicesService>(SecurityServicesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
