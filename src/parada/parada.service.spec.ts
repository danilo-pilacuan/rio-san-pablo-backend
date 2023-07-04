import { Test, TestingModule } from '@nestjs/testing';
import { ParadaService } from './parada.service';

describe('ParadaService', () => {
  let service: ParadaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ParadaService],
    }).compile();

    service = module.get<ParadaService>(ParadaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
