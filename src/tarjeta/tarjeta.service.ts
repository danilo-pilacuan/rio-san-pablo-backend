import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { Tarjeta } from './tarjeta.entity';
import { CreateTarjetaDTO, UpdateTarjetaDTO } from './dto/tarjeta.dto';

@Injectable()
export class TarjetaService {
  constructor(
    @InjectRepository(Tarjeta)
    private tarjetaRepository: Repository<Tarjeta>,
  ) {}

  async createTarjeta(createTarjetaDTO: CreateTarjetaDTO): Promise<Tarjeta> {
    // const createdTarjeta = await this.tarjetaRepository.save(createTarjetaDTO);
    // return createdTarjeta;
    let tarjetaNueva = new Tarjeta();
    tarjetaNueva.fecha=createTarjetaDTO.fecha;
    tarjetaNueva.observaciones=createTarjetaDTO.observaciones;
    tarjetaNueva.chofer=<any>{id: createTarjetaDTO.idChofer};
    tarjetaNueva.controlador=<any>{id: createTarjetaDTO.idControlador};
    tarjetaNueva.ruta=<any>{id: createTarjetaDTO.idRuta};
    tarjetaNueva.unidad=<any>{id: createTarjetaDTO.idUnidad};
    tarjetaNueva.reporte=<any>{id: createTarjetaDTO.reporteId};
    return await this.tarjetaRepository.save(tarjetaNueva);
  }

  async updateTarjeta(updateTarjetaDTO: UpdateTarjetaDTO): Promise<Tarjeta> {
    const updatedTarjeta = await this.tarjetaRepository.save(updateTarjetaDTO);
    return updatedTarjeta;
  }

  findAll(): Promise<Tarjeta[]> {
    return this.tarjetaRepository.find({relations:{
      chofer:true,
      unidad:true,
      controlador:true,
      ruta:true
    }});
  }

  findOne(id: number): Promise<Tarjeta | null> {
    return this.tarjetaRepository.findOneBy({id});
  }

  async findByReporteId(idReporte: number): Promise<Tarjeta[]> {
    return await this.tarjetaRepository.find({
      relations:{
        reporte:true,
        chofer:true,
        unidad:true,
        controlador:true,
        ruta:true
      },
      where:{
        reporte:{
          id: idReporte
        }
      }
    });
  }

  async remove(id: number): Promise<DeleteResult> {
    const result = await this.tarjetaRepository.delete(id);
    return result;
  }
}
