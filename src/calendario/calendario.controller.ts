import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { CalendarioService } from './calendario.service';
import { CreateCalendarioDTO, UpdateCalendarioDTO } from './dto/calendario.dto';
import { Calendario } from './calendario.entity';

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
  findAllCalendarios(): Promise<Calendario[]> {
    return this.calendarioService.findAllCalendarios();
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
