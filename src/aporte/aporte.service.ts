import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Aporte } from './aporte.entity';

@Injectable()
export class AporteService {
  constructor(
    @InjectRepository(Aporte)
    private aportesRepository: Repository<Aporte>,
  ) {}

  findAll(): Promise<Aporte[]> {
    return this.aportesRepository.find();
  }

  findOne(id: number): Promise<Aporte | null> {
    return this.aportesRepository.findOneBy({ id });
  }

  async remove(id: number): Promise<void> {
    await this.aportesRepository.delete(id);
  }
}