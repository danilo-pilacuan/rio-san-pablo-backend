import { Test, TestingModule } from '@nestjs/testing';
import { FleteController } from './flete.controller';

describe('FleteController', () => {
  let controller: FleteController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FleteController],
    }).compile();

    controller = module.get<FleteController>(FleteController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
