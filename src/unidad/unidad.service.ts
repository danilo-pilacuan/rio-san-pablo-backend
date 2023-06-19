import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { Unidad } from './unidad.entity';
import { CreateUnidadDTO, UpdateUnidadDTO } from './dto/unidad.dto';

@Injectable()
export class UnidadService {
  constructor(
    @InjectRepository(Unidad)
    private unidadsRepository: Repository<Unidad>,
  ) {}


  async createUnidad (createUnidadDTO:CreateUnidadDTO){
    
    const createdUnidad = await this.unidadsRepository.save(createUnidadDTO);
    
    return createdUnidad;
}

async updateUnidad (updateUnidadDTO:UpdateUnidadDTO){
    
  const createdUnidad = await this.unidadsRepository.save(updateUnidadDTO);
  
  return createdUnidad;
}

  findAll(): Promise<Unidad[]> {
    return this.unidadsRepository.find();
  }

  findOne(id: number): Promise<Unidad | null> {
    return this.unidadsRepository.findOneBy({ id });
  }

  async remove(id: number): Promise<DeleteResult> {
    const result=await this.unidadsRepository.delete(id);
    return result;
  }
}