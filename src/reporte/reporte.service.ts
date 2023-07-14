import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { Reporte } from './reporte.entity';
import { CreateReporteDTO, UpdateReporteDTO } from './dto/reporte.dto';

@Injectable()
export class ReporteService {
  constructor(
    @InjectRepository(Reporte)
    private reporteRepository: Repository<Reporte>,
  ) {}

  async createReporte(createReporteDTO: CreateReporteDTO): Promise<Reporte> {
    const reporte = this.reporteRepository.create(createReporteDTO);
    return this.reporteRepository.save(reporte);

    
  }

  async updateReporte(id: number, updateReporteDTO: UpdateReporteDTO): Promise<Reporte | null> {
    const reporte = await this.reporteRepository.findOneBy({id});
    if (!reporte) {
      return null;
    }

    Object.assign(reporte, updateReporteDTO);
    return this.reporteRepository.save(reporte);
  }

  async findAllReportes(): Promise<Reporte[]> {
    return this.reporteRepository.find();
  }

  async findOneReporte(id: number): Promise<Reporte | null> {
    return this.reporteRepository.findOneBy({id});
  }

  async deleteReporte(id: number): Promise<DeleteResult> {
    return await this.reporteRepository.delete(id);
  }
}
