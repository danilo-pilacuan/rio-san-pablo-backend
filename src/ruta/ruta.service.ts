import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Ruta } from './ruta.entity';

@Injectable()
export class RutaService {
  constructor(
    @InjectRepository(Ruta)
    private rutasRepository: Repository<Ruta>,
  ) {}

  findAll(): Promise<Ruta[]> {
    return this.rutasRepository.find();
  }

  findOne(id: number): Promise<Ruta | null> {
    return this.rutasRepository.findOneBy({ id });
  }

  async remove(id: number): Promise<void> {
    await this.rutasRepository.delete(id);
  }
}