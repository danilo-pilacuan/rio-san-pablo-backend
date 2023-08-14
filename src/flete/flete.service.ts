import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { Flete } from './flete.entity';
import { CreateFleteDTO, UpdateFleteDTO } from './dto/flete.dto';

@Injectable()
export class FleteService {
  constructor(
    @InjectRepository(Flete)
    private fletesRepository: Repository<Flete>,
  ) {}

  async createFlete(createFleteDTO: CreateFleteDTO) {
    //const createdFlete = await this.fletesRepository.save(createFleteDTO);
    const createdFlete = new Flete();
    createdFlete.descripcion=createFleteDTO.descripcion;
    createdFlete.lugarInicio=createFleteDTO.lugarInicio;
    createdFlete.lugarFin=createFleteDTO.lugarFin;
    // createdFlete.horaInicio=createFleteDTO.horaInicio;
    // createdFlete.horaFin=createFleteDTO.horaFin;
    createdFlete.fechaInicio=createFleteDTO.fechaInicio;
    createdFlete.fechaFin=createFleteDTO.fechaFin;
    createdFlete.numHoras=createFleteDTO.numHoras;
    createdFlete.activa=createFleteDTO.activa;
    createdFlete.unidad=<any>{id: createFleteDTO.unidadId};

    return await this.fletesRepository.save(createdFlete);
  }

  async updateFlete(id: number, updateFleteDTO: UpdateFleteDTO) {
    const existingFlete = await this.fletesRepository.findOneBy({id});

    if (!existingFlete) {
      return null;
    }

    let updatedFlete = Object.assign(existingFlete, updateFleteDTO);
    updatedFlete.activa=updateFleteDTO.activa;
    updatedFlete.unidad=<any>{id: updateFleteDTO.unidadId};
    await this.fletesRepository.save(updatedFlete);
    return updatedFlete;
  }

  findAll(): Promise<Flete[]> {
    return this.fletesRepository.find({
      relations:{
        unidad:true
      }
    });
  }

  findOne(id: number): Promise<Flete | null> {
    return this.fletesRepository.findOneBy({id});
  }


//   async findByCalendarioId(id: number): Promise<Flete[] | null> {
//     return await this.fletesRepository.find({
//       where:{
//         fletesCalendario:
//         {
//           calendario:{
//             id:id
//           }
//         }
//       },
//       relations:
//       {
//         fletesCalendario:true
//       }
//     })
//   }


  async remove(id: number): Promise<DeleteResult> {
    return this.fletesRepository.delete(id);
  }
}
