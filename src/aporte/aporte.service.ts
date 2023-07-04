import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { Aporte } from './aporte.entity';
import { CreateAporteDTO, UpdateAporteDTO } from './dto/aporte.dto';

@Injectable()
export class AporteService {
  constructor(
    @InjectRepository(Aporte)
    private aporteRepository: Repository<Aporte>,
  ) {}

  async createAporte(createAporteDTO: CreateAporteDTO): Promise<Aporte> {
    const createdAporte = await this.aporteRepository.save(createAporteDTO);
    return createdAporte;
  }

  async updateAporte(updateAporteDTO: UpdateAporteDTO): Promise<Aporte | null> {
    const aporte = await this.aporteRepository.findOneBy(updateAporteDTO);
    if (aporte) {
      const updatedAporte = await this.aporteRepository.save({
        ...aporte,
        ...updateAporteDTO,
      });
      return updatedAporte;
    }
    return null;
  }

  async findAll(): Promise<Aporte[]> {
    return this.aporteRepository.find();
  }

  async findOne(id: number): Promise<Aporte | null> {
    return this.aporteRepository.findOneBy({id});
  }

  async remove(id: number): Promise<DeleteResult> {
    return this.aporteRepository.delete(id);
  }
}
