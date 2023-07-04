import { Controller, Get, Post, Put, Delete, Res, HttpStatus, Body, Query, Param } from '@nestjs/common';
import { AporteService } from './aporte.service';
import { Request, Response } from 'express';
import { CreateAporteDTO, UpdateAporteDTO } from './dto/aporte.dto';

@Controller('aportes')
export class AporteController {
  constructor(private readonly aporteService: AporteService) {}

  @Post()
  async createAporte(@Res() res: Response, @Body() createAporteDTO: CreateAporteDTO) {
    const createdAporte = await this.aporteService.createAporte(createAporteDTO);
    return res.status(HttpStatus.OK).json({
      createdAporte,
    });
  }

  @Get()
  async getAportes(@Res() res: Response) {
    const aportes = await this.aporteService.findAll();
    return res.status(HttpStatus.OK).json({
      data: aportes,
    });
  }

  @Get(':id')
  async getAporteById(@Res() res: Response, @Param('id') aporteId: number) {
    const aporte = await this.aporteService.findOne(aporteId);
    if (aporte) {
      return res.status(HttpStatus.OK).json({
        data: { ...aporte },
      });
    } else {
      return res.status(HttpStatus.NOT_FOUND).json({
        error: 'Aporte not found',
      });
    }
  }

  @Put(':id')
  async updateAporte(@Res() res: Response, @Param('id') aporteId: number, @Body() updateAporteDTO: UpdateAporteDTO) {
    updateAporteDTO.id = aporteId;
    const updatedAporte = await this.aporteService.updateAporte(updateAporteDTO);
    if (updatedAporte) {
      return res.status(HttpStatus.OK).json({
        updatedAporte,
      });
    } else {
      return res.status(HttpStatus.NOT_FOUND).json({
        error: 'Aporte not found',
      });
    }
  }

  @Delete(':id')
  async deleteAporte(@Res() res: Response, @Param('id') aporteId: number) {
    const deletedAporte = await this.aporteService.remove(aporteId);
    if (deletedAporte.affected > 0) {
      return res.status(HttpStatus.OK).json({
        ok: 'Aporte deleted',
      });
    } else {
      return res.status(HttpStatus.NOT_FOUND).json({
        error: 'Aporte not found',
      });
    }
  }
}
