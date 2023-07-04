import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { Tarjeta } from './tarjeta.entity';
import { CreateTarjetaDTO, UpdateTarjetaDTO } from './dto/tarjeta.dto';

@Injectable()
export class TarjetaService {
  constructor(
    @InjectRepository(Tarjeta)
    private tarjetaRepository: Repository<Tarjeta>,
  ) {}

  async createTarjeta(createTarjetaDTO: CreateTarjetaDTO): Promise<Tarjeta> {
    const createdTarjeta = await this.tarjetaRepository.save(createTarjetaDTO);
    return createdTarjeta;
  }

  async updateTarjeta(updateTarjetaDTO: UpdateTarjetaDTO): Promise<Tarjeta> {
    const updatedTarjeta = await this.tarjetaRepository.save(updateTarjetaDTO);
    return updatedTarjeta;
  }

  findAll(): Promise<Tarjeta[]> {
    return this.tarjetaRepository.find();
  }

  findOne(id: number): Promise<Tarjeta | null> {
    return this.tarjetaRepository.findOneBy({id});
  }

  async remove(id: number): Promise<DeleteResult> {
    const result = await this.tarjetaRepository.delete(id);
    return result;
  }
}
