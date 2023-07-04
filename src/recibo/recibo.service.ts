import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Recibo } from './recibo.entity';
import { CreateReciboDTO, UpdateReciboDTO } from './dto/recibo.dto';

@Injectable()
export class ReciboService {
  constructor(
    @InjectRepository(Recibo)
    private reciboRepository: Repository<Recibo>,
  ) {}

  async createRecibo(createReciboDTO: CreateReciboDTO): Promise<Recibo> {
    const recibo = this.reciboRepository.create(createReciboDTO);
    return this.reciboRepository.save(recibo);
  }

  async updateRecibo(id:number,updateReciboDTO: UpdateReciboDTO): Promise<Recibo> {
    const recibo = await this.reciboRepository.findOneBy({id});
    if (!recibo) {
      return null;
    }

    const updatedRecibo = Object.assign(recibo, updateReciboDTO);
    return this.reciboRepository.save(updatedRecibo);
  }

  async findAllRecibos(): Promise<Recibo[]> {
    return this.reciboRepository.find();
  }

  async findReciboById(id: number): Promise<Recibo> {
    return this.reciboRepository.findOneBy({id});
  }

  async deleteRecibo(id: number): Promise<boolean> {
    const result = await this.reciboRepository.delete(id);
    return result.affected > 0;
  }
}
