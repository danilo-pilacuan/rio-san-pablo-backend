import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { TarjetaService } from './tarjeta.service';
import { CreateTarjetaDTO, UpdateTarjetaDTO } from './dto/tarjeta.dto';
import { Tarjeta } from './tarjeta.entity';
import { DeleteResult } from 'typeorm';

@Controller('tarjetas')
export class TarjetaController {
  constructor(private tarjetaService: TarjetaService) {}

  @Get()
  findAll(): Promise<Tarjeta[]> {
    return this.tarjetaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Tarjeta | null> {
    return this.tarjetaService.findOne(id);
  }

  @Post()
  create(@Body() createTarjetaDTO: CreateTarjetaDTO): Promise<Tarjeta> {
    return this.tarjetaService.createTarjeta(createTarjetaDTO);
  }

  @Put(':id')
  update(
    @Param('id') id: number,
    @Body() updateTarjetaDTO: UpdateTarjetaDTO,
  ): Promise<Tarjeta> {
    updateTarjetaDTO.id = id;
    return this.tarjetaService.updateTarjeta(updateTarjetaDTO);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<DeleteResult> {
    return this.tarjetaService.remove(id);
  }
}
