import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { Socio } from './socio.entity';
import { CreateSocioDTO, UpdateSocioDTO } from './dto/socio.dto';

@Injectable()
export class SocioService {
  constructor(
    @InjectRepository(Socio)
    private sociosRepository: Repository<Socio>,
  ) {}


  async createSocio (createSocioDTO:CreateSocioDTO){
    
    const createdSocio = await this.sociosRepository.save(createSocioDTO);
    
    return createdSocio;
}

async updateSocio (updateSocioDTO:UpdateSocioDTO){
    
  const createdSocio = await this.sociosRepository.save(updateSocioDTO);
  
  return createdSocio;
}

  findAll(): Promise<Socio[]> {
    return this.sociosRepository.find();
  }

  findOne(id: number): Promise<Socio | null> {
    return this.sociosRepository.findOneBy({ id });
  }

  async remove(id: number): Promise<DeleteResult> {
    const result=await this.sociosRepository.delete(id);
    return result;
  }
}