import { Controller, Get, Post, Put, Delete, Body, Param, Res, HttpStatus } from '@nestjs/common';
import { TarjetaService } from './tarjeta.service';
import { CreateTarjetaDTO, UpdateTarjetaDTO } from './dto/tarjeta.dto';
import { Tarjeta } from './tarjeta.entity';
import { DeleteResult } from 'typeorm';
import { Request, Response } from 'express';

@Controller('tarjetas')
export class TarjetaController {
  constructor(private tarjetaService: TarjetaService) {}

  @Get()
  async findAll(@Res() res: Response){
    
    const tarjetas = await this.tarjetaService.findAll();
    return res.status(HttpStatus.OK).json({
      data: tarjetas,
    });
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Tarjeta | null> {
    return this.tarjetaService.findOne(id);
  }

  @Get('byIdReporte/:idReporte')
  async findByReporte(@Param('idReporte') idReporte: number,@Res() res: Response){
    const tarjetas= await this.tarjetaService.findByReporteId(idReporte);
    return res.status(HttpStatus.OK).json({
      data: tarjetas,
    });
  }

  // @Get(':idAporte')
  // findByAporte(@Param('id') id: number): Promise<Tarjeta | null> {
  //   return this.tarjetaService.findOne(id);
  // }

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
