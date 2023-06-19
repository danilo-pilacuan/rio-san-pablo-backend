import { Test, TestingModule } from '@nestjs/testing';
import { AporteController } from './aporte.controller';

describe('AporteController', () => {
  let controller: AporteController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AporteController],
    }).compile();

    controller = module.get<AporteController>(AporteController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
