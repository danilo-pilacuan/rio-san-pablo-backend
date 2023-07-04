import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Calendario } from './calendario.entity';
import { CreateCalendarioDTO, UpdateCalendarioDTO } from './dto/calendario.dto';

@Injectable()
export class CalendarioService {
  constructor(
    @InjectRepository(Calendario)
    private calendarioRepository: Repository<Calendario>,
  ) {}

  async createCalendario(createCalendarioDTO: CreateCalendarioDTO): Promise<Calendario> {
    const calendario = this.calendarioRepository.create(createCalendarioDTO);
    return this.calendarioRepository.save(calendario);
  }

  async updateCalendario(id: number, updateCalendarioDTO: UpdateCalendarioDTO): Promise<Calendario | null> {
    const calendario = await this.calendarioRepository.findOneBy({id});
    if (!calendario) {
      return null;
    }

    Object.assign(calendario, updateCalendarioDTO);
    return this.calendarioRepository.save(calendario);
  }

  async findAllCalendarios(): Promise<Calendario[]> {
    return this.calendarioRepository.find();
  }

  async findOneCalendario(id: number): Promise<Calendario | null> {
    return this.calendarioRepository.findOneBy({id});
  }

  async deleteCalendario(id: number): Promise<void> {
    await this.calendarioRepository.delete(id);
  }
}
