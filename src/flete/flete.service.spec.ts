import { Test, TestingModule } from '@nestjs/testing';
import { FleteService } from './flete.service';

describe('FleteService', () => {
  let service: FleteService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FleteService],
    }).compile();

    service = module.get<FleteService>(FleteService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
