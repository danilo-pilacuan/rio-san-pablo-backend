import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { Ruta } from './ruta.entity';
import { CreateRutaDTO, UpdateRutaDTO } from './dto/ruta.dto';

@Injectable()
export class RutaService {
  constructor(
    @InjectRepository(Ruta)
    private rutasRepository: Repository<Ruta>,
  ) {}

  async createRuta(createRutaDTO: CreateRutaDTO) {
    const createdRuta = await this.rutasRepository.save(createRutaDTO);
    return createdRuta;
  }

  async updateRuta(id: number, updateRutaDTO: UpdateRutaDTO) {
    const existingRuta = await this.rutasRepository.findOneBy({id});

    if (!existingRuta) {
      return null;
    }

    const updatedRuta = Object.assign(existingRuta, updateRutaDTO);
    await this.rutasRepository.save(updatedRuta);
    return updatedRuta;
  }

  findAll(): Promise<Ruta[]> {
    return this.rutasRepository.find();
  }

  findOne(id: number): Promise<Ruta | null> {
    return this.rutasRepository.findOneBy({id});
  }


  async findByCalendarioId(id: number): Promise<Ruta[] | null> {
    return await this.rutasRepository.find({
      where:{
        rutasCalendario:
        {
          calendario:{
            id:id
          }
        }
      },
      relations:
      {
        rutasCalendario:true
      }
    })
  }


  async remove(id: number): Promise<DeleteResult> {
    return this.rutasRepository.delete(id);
  }
}
