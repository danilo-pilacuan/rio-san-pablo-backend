import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Parada } from './parada.entity';
import { CreateParadaDTO, UpdateParadaDTO } from './dto/parada.dto';

@Injectable()
export class ParadaService {
  constructor(
    @InjectRepository(Parada)
    private paradaRepository: Repository<Parada>,
  ) {}

  async createParada(createParadaDTO: CreateParadaDTO): Promise<Parada> {
    const parada = this.paradaRepository.create(createParadaDTO);
    return this.paradaRepository.save(parada);
  }

  async updateParada(updateParadaDTO: UpdateParadaDTO): Promise<Parada> {
    const { id, ...rest } = updateParadaDTO;
    await this.paradaRepository.update(id, rest);
    return this.paradaRepository.findOneBy({id});
  }

  async findAll(): Promise<Parada[]> {
    return this.paradaRepository.find();
  }

  async findOne(id: number): Promise<Parada | null> {
    return this.paradaRepository.findOneBy({id});
  }

  async remove(id: number): Promise<void> {
    await this.paradaRepository.delete(id);
  }
}
