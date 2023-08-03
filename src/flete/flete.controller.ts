import { Controller, Get, Post, Put, Delete, Res, HttpStatus, Body, Param } from '@nestjs/common';
import { FleteService } from './flete.service';
import { Response } from 'express';
import { CreateFleteDTO, UpdateFleteDTO } from './dto/flete.dto';

@Controller('fletes')
export class FleteController {
  constructor(private readonly fleteService: FleteService) {}

  @Post()
  async createFlete(@Res() res: Response, @Body() createFleteDTO: CreateFleteDTO) {
    const createdFlete = await this.fleteService.createFlete(createFleteDTO);
    return res.status(HttpStatus.OK).json({
      createdFlete
    });
  }

  @Get()
  async getFletes(@Res() res: Response) {
    const fletes = await this.fleteService.findAll();
    return res.status(HttpStatus.OK).json({
      data: fletes
    });
  }

  @Get(':id')
  async getFleteById(@Res() res: Response, @Param('id') fleteId: number) {
    const flete = await this.fleteService.findOne(fleteId);

    if (flete) {
      return res.status(HttpStatus.OK).json({
        data: { ...flete }
      });
    } else {
      return res.status(HttpStatus.NOT_FOUND).json({
        error: 'Flete not found'
      });
    }
  }

//   @Get('getByCalendarioId/:id')
//   async findByCalendarioId(@Res() res: Response, @Param('id') fleteId: number) {
//     const flete = await this.fleteService.findByCalendarioId(fleteId);

//     if (flete) {
//       return res.status(HttpStatus.OK).json({
//         data: flete
//       });
//     } else {
//       return res.status(HttpStatus.NOT_FOUND).json({
//         error: 'Flete not found'
//       });
//     }
//   }

  @Put(':id')
  async updateFlete(@Res() res: Response, @Param('id') fleteId: number, @Body() updateFleteDTO: UpdateFleteDTO) {
    const updatedFlete = await this.fleteService.updateFlete(fleteId, updateFleteDTO);

    if (updatedFlete) {
      return res.status(HttpStatus.OK).json({
        updatedFlete
      });
    } else {
      return res.status(HttpStatus.NOT_FOUND).json({
        error: 'Flete not found'
      });
    }
  }

  @Delete(':id')
  async deleteFlete(@Res() res: Response, @Param('id') fleteId: number) {
    const deletedFlete = await this.fleteService.remove(fleteId);

    if (deletedFlete) {
      return res.status(HttpStatus.OK).json({
        ok: 'ok'
      });
    } else {
      return res.status(HttpStatus.NOT_FOUND).json({
        error: 'Flete not found'
      });
    }
  }
}
