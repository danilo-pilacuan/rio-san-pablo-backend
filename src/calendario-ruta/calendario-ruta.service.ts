import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CalendarioRuta } from './calendario-ruta.entity';
import { Calendario } from './../calendario/calendario.entity';
import { CreateCalendarioRutaDTO, UpdateCalendarioRutaDTO } from './dto/calendario-ruta.dto';

@Injectable()
export class CalendarioRutaService {
  constructor(
    @InjectRepository(CalendarioRuta)
    private calendarioRutaRepository: Repository<CalendarioRuta>,
    @InjectRepository(Calendario)
    private calendarioRepository: Repository<Calendario>,
  ) {}

  async createCalendarioRuta(createCalendarioRutaDTO: CreateCalendarioRutaDTO): Promise<CalendarioRuta> {
    console.log("*******************************");
    let calendarioRuta = new CalendarioRuta();
    calendarioRuta.dia=createCalendarioRutaDTO.dia;
    calendarioRuta.valor=createCalendarioRutaDTO.valor;
    calendarioRuta.ruta=<any>{id: createCalendarioRutaDTO.rutaId};
    calendarioRuta.calendario=<any>{id: createCalendarioRutaDTO.calendarioId};

    return this.calendarioRutaRepository.save(calendarioRuta);
  }

  async createCalendarioRutaBatch(createCalendarioRutaDTO: CreateCalendarioRutaDTO):Promise<CalendarioRuta[]>
  {
    console.log("-------------------------------------")
    let calendarioId=0;
    let rutaId=0;
    let mes=0;

    let numDias=30;

    calendarioId=createCalendarioRutaDTO.calendarioId;
    rutaId=createCalendarioRutaDTO.rutaId;

    let calendario=await this.calendarioRepository.findOne({
      where:{
        id:calendarioId
      }
    });

    if(calendario)
    {
      mes=calendario.mes;
      switch(mes)
      {
        case 1: case 3: case 5: case 7: case 8: case 10: case 12:
          numDias=31;
          break;
        case 2:
          let anio=calendario.anio;
          if(anio%4==0)
          {
            numDias=29;
          }
          else
          {
            numDias=28;
          }
      }

      let listaCalendarioRutas:CalendarioRuta[]=[];

      for(let i=1;i<=numDias;i++)
      {
        let calendarioRuta = new CalendarioRuta();
        calendarioRuta.dia=i;
        calendarioRuta.valor=0;
        calendarioRuta.ruta=<any>{id: createCalendarioRutaDTO.rutaId};
        calendarioRuta.calendario=<any>{id: createCalendarioRutaDTO.calendarioId};

        listaCalendarioRutas.push(await this.calendarioRutaRepository.save(calendarioRuta));
    // return this.calendarioRutaRepository.save(calendarioRuta);
      }

      return listaCalendarioRutas;

    }

    

    return null;
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
    return await this.calendarioRutaRepository.findOne({
      where:{

        id
      }  
    });
  }

  async deleteCalendarioRuta(id: number): Promise<void> {
    await this.calendarioRutaRepository.delete(id);
  }

  async deleteCalendarioRutaBatch(createCalendarioRutaDTO: CreateCalendarioRutaDTO) {
  
    // console.log("createCalendarioRutaDTO")
    // console.log(createCalendarioRutaDTO)

  //   let listaCalendarioRutas= await this.calendarioRutaRepository.find({
  //     where: {
  //         ruta:{
  //           id:createCalendarioRutaDTO.rutaId
  //         },
  //         calendario:{
  //           id:createCalendarioRutaDTO.calendarioId
  //         }
  //     },
  // })

  //   if(listaCalendarioRutas)
  //   {
  //     await this.calendarioRutaRepository.delete(listaCalendarioRutas.map(obj=>obj.id));
  //   }

    await this.calendarioRutaRepository.delete({
      ruta:{
        id:createCalendarioRutaDTO.rutaId
      },
      calendario:{
        id:createCalendarioRutaDTO.calendarioId
      },
    })

  }

}
