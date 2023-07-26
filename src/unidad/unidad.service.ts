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

async createUnidadImg(createUnidadDTO: CreateUnidadDTO,urlFotoUnidad:string): Promise<Unidad> {
  // let servicioNuevo = new Servicio();
  // servicioNuevo.descripcion=createHabitacionDTO.descripcion;
  // servicioNuevo.nombre=createHabitacionDTO.nombre;
  // servicioNuevo.tipo=createHabitacionDTO.tipo;
  // servicioNuevo.precio=createHabitacionDTO.precio;
  // servicioNuevo.urlFotoNormal=urlFotoNormal;
  // servicioNuevo.urlFoto360=urlFoto360;

  console.log("-----------------------------------------")
  console.log(createUnidadDTO)
  console.log("-----------------------------------------")

  let unidadNueva = new Unidad();
  
  unidadNueva.placa=createUnidadDTO.placa;
  unidadNueva.descripcion=createUnidadDTO.descripcion;
  unidadNueva.observaciones=createUnidadDTO.observaciones;
  unidadNueva.urlFotoUnidad=urlFotoUnidad;
  //unidadNueva.activo=createUnidadDTO.activo;
  unidadNueva.activo=true;
  
  
  return await this.unidadsRepository.save(unidadNueva);
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

  async updateUnidadImg (updateUnidadDTO:UpdateUnidadDTO,urlFotoUnidad:string){
    
    let unidadEncontrada = await this.unidadsRepository.findOne({
      where:
      {
          id:updateUnidadDTO.id
      }
    });

    unidadEncontrada.placa=updateUnidadDTO.placa;
    unidadEncontrada.descripcion=updateUnidadDTO.descripcion;
    unidadEncontrada.observaciones=updateUnidadDTO.observaciones;
    unidadEncontrada.urlFotoUnidad=urlFotoUnidad;
    //unidadEncontrada.activo=updateUnidadDTO.activo;
    unidadEncontrada.activo=true;
    

     //const createdUnidad = await this.unidadsRepository.save(updateUnidadDTO);
      
    return await this.unidadsRepository.save(unidadEncontrada);
  }
  

}

