import { Test, TestingModule } from '@nestjs/testing';
import { ParadaController } from './parada.controller';

describe('ParadaController', () => {
  let controller: ParadaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ParadaController],
    }).compile();

    controller = module.get<ParadaController>(ParadaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
