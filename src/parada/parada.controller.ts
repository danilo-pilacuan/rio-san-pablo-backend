import { Controller, Get, Post, Put, Delete, Res, HttpStatus, Body, Param } from '@nestjs/common';
import { ParadaService } from './parada.service';
import { Response } from 'express';
import { CreateParadaDTO, UpdateParadaDTO } from './dto/parada.dto';

@Controller('paradas')
export class ParadaController {
  constructor(private readonly paradaService: ParadaService) {}

  @Post()
  async createParada(@Res() res: Response, @Body() createParadaDTO: CreateParadaDTO) {
    const createdParada = await this.paradaService.createParada(createParadaDTO);
    return res.status(HttpStatus.OK).json({
      createdParada,
    });
  }

  @Get()
  async getParadas(@Res() res: Response) {
    const paradas = await this.paradaService.findAll();
    return res.status(HttpStatus.OK).json({
      data: paradas,
    });
  }

  @Get(':id')
  async getParadaById(@Res() res: Response, @Param('id') paradaId: number) {
    const parada = await this.paradaService.findOne(paradaId);
    if (parada) {
      return res.status(HttpStatus.OK).json({
        data: parada,
      });
    } else {
      return res.status(HttpStatus.NOT_FOUND).json({
        error: 'Parada not found',
      });
    }
  }

  @Put(':id')
  async updateParada(@Res() res: Response, @Param('id') paradaId: number, @Body() updateParadaDTO: UpdateParadaDTO) {
    try {
      updateParadaDTO.id = paradaId;
      const updatedParada = await this.paradaService.updateParada(updateParadaDTO);
      return res.status(HttpStatus.OK).json({
        updatedParada,
      });
    } catch (error) {
      return res.status(HttpStatus.NOT_FOUND).json({
        error: error.message,
      });
    }
  }

  @Delete(':id')
  async deleteParada(@Res() res: Response, @Param('id') paradaId: number) {
    try {
      await this.paradaService.remove(paradaId);
      return res.status(HttpStatus.OK).json({
        message: 'Parada deleted successfully',
      });
    } catch (error) {
      return res.status(HttpStatus.NOT_FOUND).json({
        error: error.message,
      });
    }
  }
}
