import { Controller, Get, Post, Put, Delete, Param, Body, Res, HttpStatus } from '@nestjs/common';
import { CalendarioService } from './calendario.service';
import { CreateCalendarioDTO, UpdateCalendarioDTO } from './dto/calendario.dto';
import { Calendario } from './calendario.entity';
import { Request, Response } from 'express';

@Controller('calendarios')
export class CalendarioController {
  constructor(private calendarioService: CalendarioService) {}

  @Post()
  createCalendario(@Body() createCalendarioDTO: CreateCalendarioDTO): Promise<Calendario> {
    return this.calendarioService.createCalendario(createCalendarioDTO);
  }

  @Put(':id')
  updateCalendario(@Param('id') id: number, @Body() updateCalendarioDTO: UpdateCalendarioDTO): Promise<Calendario | null> {
    return this.calendarioService.updateCalendario(id, updateCalendarioDTO);
  }

  @Get()
  async findAllCalendarios(@Res() res: Response) {
    const calendarios = await this.calendarioService.findAllCalendarios();
    return res.status(HttpStatus.OK).json({
      data: calendarios,
    });
  }

  @Get(':id')
  findOneCalendario(@Param('id') id: number): Promise<Calendario | null> {
    return this.calendarioService.findOneCalendario(id);
  }

  @Delete(':id')
  deleteCalendario(@Param('id') id: number): Promise<void> {
    return this.calendarioService.deleteCalendario(id);
  }
}
