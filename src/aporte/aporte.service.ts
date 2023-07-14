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
    
    let createdAporte = new Aporte();
    createdAporte.numDisco=createAporteDTO.numDisco
    createdAporte.cantidad=createAporteDTO.cantidad
    createdAporte.tarjetaActual=createAporteDTO.tarjetaActual
    createdAporte.adicional=createAporteDTO.adicional
    createdAporte.otros=createAporteDTO.otros
    createdAporte.mcAct=createAporteDTO.mcAct
    createdAporte.mcAnt=createAporteDTO.mcAnt
    createdAporte.multas=createAporteDTO.multas
    createdAporte.total=createAporteDTO.total
    createdAporte.socio=<any>{id: createAporteDTO.socioId};
    createdAporte.recibo=<any>{id: null};
    createdAporte.tarjeta=<any>{id: createAporteDTO.tarjetaId};
    createdAporte.reporte=<any>{id: createAporteDTO.reporteId};
    // createdAporte.reporteId=createAporteDTO.reporteId
    // createdAporte.socioId=createAporteDTO.socioId
    // createdAporte.reciboId=createAporteDTO.reciboId
    // createdAporte.tarjetaId=createAporteDTO.tarjetaId

    //const createdAporte = 
    return await this.aporteRepository.save(createdAporte);
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
    return this.aporteRepository.find({relations:{
      recibo:true,
      socio:true,
      tarjeta:true,
      reporte:true
    }});
  }

  async findOne(id: number): Promise<Aporte | null> {
    return this.aporteRepository.findOneBy({id});
  }

  async remove(id: number): Promise<DeleteResult> {
    return this.aporteRepository.delete(id);
  }
}
