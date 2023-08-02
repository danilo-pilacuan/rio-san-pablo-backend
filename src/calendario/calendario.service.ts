import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Calendario } from './calendario.entity';
import { CalendarioRuta} from './../calendario-ruta/calendario-ruta.entity'
import { CreateCalendarioDTO, UpdateCalendarioDTO } from './dto/calendario.dto';
import { CreateCalendarioRutaDTO } from 'src/calendario-ruta/dto/calendario-ruta.dto';

@Injectable()
export class CalendarioService {
  constructor(
    @InjectRepository(Calendario)
    private calendarioRepository: Repository<Calendario>,
    @InjectRepository(CalendarioRuta)
    private calendarioRutaRepository: Repository<CalendarioRuta>,
  ) {}

  async createCalendario(createCalendarioDTO: CreateCalendarioDTO): Promise<Calendario> {
    
    
    // {dia: number;
    // valor: number;
    // calendarioId: number;
    // rutaId: number;}

    // let numDias=0;
    // if(createCalendarioDTO.mes==1 || createCalendarioDTO.mes==3 ||createCalendarioDTO.mes==5 ||
    //   createCalendarioDTO.mes==7 ||createCalendarioDTO.mes==9 ||createCalendarioDTO.mes==10 ||createCalendarioDTO.mes==12)
    // {
    //   numDias=31;
    // }
    // else if(createCalendarioDTO.mes==2)
    //   {
    //     numDias=28;
    //   }
    //   else
    //   {
    //     numDias=30;
    //   }
    
    // for(let i=1;i<=numDias;i++)
    // {
    //   let createCalendarioRutaDTO=new CreateCalendarioRutaDTO();
    //   createCalendarioRutaDTO.dia=i;
    //   createCalendarioRutaDTO.rutaId=
    // }

    const calendario = this.calendarioRepository.create(createCalendarioDTO);
    const savedCalendario = this.calendarioRepository.save(calendario);


    return savedCalendario;
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
    return this.calendarioRepository.find({
      // relations:{
      //   rutasCalendario:true
      // }
    });
  }

  async findOneCalendario(id: number): Promise<Calendario | null> {
    return await this.calendarioRepository.findOne({
      where:{
        id:id
      },
        // relations:{
        //   rutasCalendario:
        //   {
        //     ruta: true
        //   }
          
        // }
      });
  }

  async deleteCalendario(id: number): Promise<void> {
    
    await this.calendarioRutaRepository.delete({
      calendario:{
        id
      }
    })
    
    await this.calendarioRepository.delete(id);
  }
}
