import { Controller, Get, Post, Put, Delete, Param, Body, Res, HttpStatus } from '@nestjs/common';
import { CalendarioRutaService } from './calendario-ruta.service';
import { CreateCalendarioRutaDTO, UpdateCalendarioRutaDTO } from './dto/calendario-ruta.dto';
import { CalendarioRuta } from './calendario-ruta.entity';
import { Request, Response } from 'express';

@Controller('calendarioRutas')
export class CalendarioRutaController {
  constructor(private calendarioRutaService: CalendarioRutaService) {}

  @Post()
  createCalendarioRuta(@Body() createCalendarioRutaDTO: CreateCalendarioRutaDTO): Promise<CalendarioRuta> {
    return this.calendarioRutaService.createCalendarioRuta(createCalendarioRutaDTO);
  }

  @Put(':id')
  updateCalendarioRuta(@Param('id') id: number, @Body() updateCalendarioRutaDTO: UpdateCalendarioRutaDTO): Promise<CalendarioRuta | null> {
    return this.calendarioRutaService.updateCalendarioRuta(id, updateCalendarioRutaDTO);
  }

  @Get()
  async findAllCalendarioRutas(@Res() res: Response) {
    
    const calendarioRutas= await this.calendarioRutaService.findAllCalendarioRutas();
    return res.status(HttpStatus.OK).json({
      data: calendarioRutas,
    });

  }

  @Get(':id')
  findOneCalendarioRuta(@Param('id') id: number): Promise<CalendarioRuta | null> {
    return this.calendarioRutaService.findOneCalendarioRuta(id);
  }

  @Delete(':id')
  deleteCalendarioRuta(@Param('id') id: number): Promise<void> {
    return this.calendarioRutaService.deleteCalendarioRuta(id);
  }
}
