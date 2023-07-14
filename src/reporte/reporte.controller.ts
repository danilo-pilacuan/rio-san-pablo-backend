import { Controller, Get, Post, Put, Delete, Param, Body, Res, HttpStatus } from '@nestjs/common';
import { ReporteService } from './reporte.service';
import { CreateReporteDTO, UpdateReporteDTO } from './dto/reporte.dto';
import { Reporte } from './reporte.entity';
import { Request,Response } from 'express';

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
  async findAllReportes(@Res() res:Response) {
    const reportes= await this.reporteService.findAllReportes();
    return res.status(HttpStatus.OK).json({
      "data":reportes
    })
  }

  @Get(':id')
  findOneReporte(@Param('id') id: number): Promise<Reporte | null> {
    return this.reporteService.findOneReporte(id);
  }

  @Delete(':id')
  async deleteReporte(@Res() res,@Param('id') id: number) {
    
    const deletedReporte = await this.reporteService.deleteReporte(id);

        if(deletedReporte)
        {
            return res.status(HttpStatus.OK).json({
                "ok":"ok"
            })    
        }
        else
        {
            return res.status(HttpStatus.NOT_FOUND).json({
                "error":"error"
            })    
        }
  }
}
