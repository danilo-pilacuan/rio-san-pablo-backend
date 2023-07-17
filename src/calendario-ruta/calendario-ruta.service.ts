import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CalendarioRuta } from './calendario-ruta.entity';
import { CreateCalendarioRutaDTO, UpdateCalendarioRutaDTO } from './dto/calendario-ruta.dto';

@Injectable()
export class CalendarioRutaService {
  constructor(
    @InjectRepository(CalendarioRuta)
    private calendarioRutaRepository: Repository<CalendarioRuta>,
  ) {}

  async createCalendarioRuta(createCalendarioRutaDTO: CreateCalendarioRutaDTO): Promise<CalendarioRuta> {
    
    let calendarioRuta = new CalendarioRuta();
    calendarioRuta.dia=createCalendarioRutaDTO.dia;
    calendarioRuta.valor=createCalendarioRutaDTO.valor;
    calendarioRuta.ruta=<any>{id: createCalendarioRutaDTO.rutaId};
    calendarioRuta.calendario=<any>{id: createCalendarioRutaDTO.calendarioId};

    return this.calendarioRutaRepository.save(calendarioRuta);
  }

  async updateCalendarioRuta(id: number, updateCalendarioRutaDTO: UpdateCalendarioRutaDTO): Promise<CalendarioRuta | null> {
    const calendarioRuta = await this.calendarioRutaRepository.findOneBy({id});
    if (!calendarioRuta) {
      return null;
    }

    Object.assign(calendarioRuta, updateCalendarioRutaDTO);
    return this.calendarioRutaRepository.save(calendarioRuta);
  }

  async findAllCalendarioRutas(): Promise<CalendarioRuta[]> {
    return await this.calendarioRutaRepository.find({relations:{
      calendario:true,
      ruta:true
    }});
  }

  async findOneCalendarioRuta(id: number): Promise<CalendarioRuta | null> {
    return this.calendarioRutaRepository.findOneBy({id});
  }

  async deleteCalendarioRuta(id: number): Promise<void> {
    await this.calendarioRutaRepository.delete(id);
  }
}
