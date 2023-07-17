import { Test, TestingModule } from '@nestjs/testing';
import { CalendarioRutaController } from './calendario-ruta.controller';

describe('CalendarioRutaController', () => {
  let controller: CalendarioRutaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CalendarioRutaController],
    }).compile();

    controller = module.get<CalendarioRutaController>(CalendarioRutaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
