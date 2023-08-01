import { Controller, Get, Post, Put, Delete, Res, HttpStatus, Body, Param } from '@nestjs/common';
import { RutaService } from './ruta.service';
import { Response } from 'express';
import { CreateRutaDTO, UpdateRutaDTO } from './dto/ruta.dto';

@Controller('rutas')
export class RutaController {
  constructor(private readonly rutaService: RutaService) {}

  @Post()
  async createRuta(@Res() res: Response, @Body() createRutaDTO: CreateRutaDTO) {
    const createdRuta = await this.rutaService.createRuta(createRutaDTO);
    return res.status(HttpStatus.OK).json({
      createdRuta
    });
  }

  @Get()
  async getRutas(@Res() res: Response) {
    const rutas = await this.rutaService.findAll();
    return res.status(HttpStatus.OK).json({
      data: rutas
    });
  }

  @Get(':id')
  async getRutaById(@Res() res: Response, @Param('id') rutaId: number) {
    const ruta = await this.rutaService.findOne(rutaId);

    if (ruta) {
      return res.status(HttpStatus.OK).json({
        data: { ...ruta }
      });
    } else {
      return res.status(HttpStatus.NOT_FOUND).json({
        error: 'Ruta not found'
      });
    }
  }

  @Get('getByCalendarioId/:id')
  async findByCalendarioId(@Res() res: Response, @Param('id') rutaId: number) {
    const ruta = await this.rutaService.findByCalendarioId(rutaId);

    if (ruta) {
      return res.status(HttpStatus.OK).json({
        data: ruta
      });
    } else {
      return res.status(HttpStatus.NOT_FOUND).json({
        error: 'Ruta not found'
      });
    }
  }

  @Put(':id')
  async updateRuta(@Res() res: Response, @Param('id') rutaId: number, @Body() updateRutaDTO: UpdateRutaDTO) {
    const updatedRuta = await this.rutaService.updateRuta(rutaId, updateRutaDTO);

    if (updatedRuta) {
      return res.status(HttpStatus.OK).json({
        updatedRuta
      });
    } else {
      return res.status(HttpStatus.NOT_FOUND).json({
        error: 'Ruta not found'
      });
    }
  }

  @Delete(':id')
  async deleteRuta(@Res() res: Response, @Param('id') rutaId: number) {
    const deletedRuta = await this.rutaService.remove(rutaId);

    if (deletedRuta) {
      return res.status(HttpStatus.OK).json({
        ok: 'ok'
      });
    } else {
      return res.status(HttpStatus.NOT_FOUND).json({
        error: 'Ruta not found'
      });
    }
  }
}
