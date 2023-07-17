import { Test, TestingModule } from '@nestjs/testing';
import { CalendarioRutaService } from './calendario-ruta.service';

describe('CalendarioRutaService', () => {
  let service: CalendarioRutaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CalendarioRutaService],
    }).compile();

    service = module.get<CalendarioRutaService>(CalendarioRutaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
