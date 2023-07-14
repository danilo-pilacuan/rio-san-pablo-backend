import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { Inventario } from './inventario.entity';
import { CreateInventarioDTO, UpdateInventarioDTO } from './dto/inventario.dto';

@Injectable()
export class InventarioService {
  constructor(
    @InjectRepository(Inventario)
    private inventarioRepository: Repository<Inventario>,
  ) {}

  async createInventario(createInventarioDTO: CreateInventarioDTO) {
    const createdInventario = await this.inventarioRepository.save(createInventarioDTO);
    return createdInventario;
  }

  async updateInventario(updateInventarioDTO: UpdateInventarioDTO) {

    const updatedInventario = await this.inventarioRepository.save(updateInventarioDTO);
  
    return updatedInventario;
  }

  findAll(): Promise<Inventario[]> {
    return this.inventarioRepository.find();
  }

  findOne(id: number): Promise<Inventario | null> {
    return this.inventarioRepository.findOneBy({id});
  }

  async remove(id: number): Promise<DeleteResult> {
    const result = await this.inventarioRepository.delete(id);
    return result;
  }
}
