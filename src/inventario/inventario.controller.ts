import { Controller, Get, Post, Put, Delete, Res, HttpStatus, Body, Param } from '@nestjs/common';
import { InventarioService } from './inventario.service';
import { Response } from 'express';
import { CreateInventarioDTO, UpdateInventarioDTO } from './dto/inventario.dto';

@Controller('inventario')
export class InventarioController {
  constructor(private readonly inventarioService: InventarioService) {}

  @Post()
  async createInventario(@Res() res: Response, @Body() createInventarioDTO: CreateInventarioDTO) {
    const createdInventario = await this.inventarioService.createInventario(createInventarioDTO);
    return res.status(HttpStatus.OK).json({ createdInventario });
  }

  @Get()
  async getInventario(@Res() res: Response) {
    const inventario = await this.inventarioService.findAll();
    return res.status(HttpStatus.OK).json({ data: inventario });
  }

  @Get(':id')
  async getInventarioById(@Res() res: Response, @Param('id') inventarioId: number) {
    const inventario = await this.inventarioService.findOne(inventarioId);
    if (inventario) {
      return res.status(HttpStatus.OK).json({ data: inventario });
    } else {
      return res.status(HttpStatus.NOT_FOUND).json({ error: 'Inventario not found' });
    }
  }

  @Put()
  async updateInventario(@Res() res: Response, @Body() updateInventarioDTO: UpdateInventarioDTO) {
    // updateInventarioDTO.id = inventarioId;
    const updatedInventario = await this.inventarioService.updateInventario(updateInventarioDTO);
    return res.status(HttpStatus.OK).json({ updatedInventario });
  }

  @Delete(':id')
  async deleteInventario(@Res() res: Response, @Param('id') inventarioId: number) {
    const deletedInventario = await this.inventarioService.remove(inventarioId);
    if (deletedInventario) {
      return res.status(HttpStatus.OK).json({ ok: 'ok' });
    } else {
      return res.status(HttpStatus.NOT_FOUND).json({ error: 'Error deleting inventario' });
    }
  }
}
