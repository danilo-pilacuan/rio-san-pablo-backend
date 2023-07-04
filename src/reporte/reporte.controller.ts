import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { ReporteService } from './reporte.service';
import { CreateReporteDTO, UpdateReporteDTO } from './dto/reporte.dto';
import { Reporte } from './reporte.entity';

@Controller('reportes')
export class ReporteController {
  constructor(private reporteService: ReporteService) {}

  @Post()
  createReporte(@Body() createReporteDTO: CreateReporteDTO): Promise<Reporte> {
    return this.reporteService.createReporte(createReporteDTO);
  }

  @Put(':id')
  updateReporte(@Param('id') id: number, @Body() updateReporteDTO: UpdateReporteDTO): Promise<Reporte | null> {
    return this.reporteService.updateReporte(id, updateReporteDTO);
  }

  @Get()
  findAllReportes(): Promise<Reporte[]> {
    return this.reporteService.findAllReportes();
  }

  @Get(':id')
  findOneReporte(@Param('id') id: number): Promise<Reporte | null> {
    return this.reporteService.findOneReporte(id);
  }

  @Delete(':id')
  deleteReporte(@Param('id') id: number): Promise<void> {
    return this.reporteService.deleteReporte(id);
  }
}
