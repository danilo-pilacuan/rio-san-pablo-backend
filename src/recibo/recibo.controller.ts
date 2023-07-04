import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { ReciboService } from './recibo.service';
import { CreateReciboDTO, UpdateReciboDTO } from './dto/recibo.dto';
import { Recibo } from './recibo.entity';

@Controller('recibos')
export class ReciboController {
  constructor(private reciboService: ReciboService) {}

  @Post()
  async createRecibo(@Body() createReciboDTO: CreateReciboDTO): Promise<Recibo> {
    return this.reciboService.createRecibo(createReciboDTO);
  }

  @Put(':id')
  async updateRecibo(
    @Param('id') id: number,
    @Body() updateReciboDTO: UpdateReciboDTO,
  ): Promise<Recibo> {
    updateReciboDTO.id = id;
    return this.reciboService.updateRecibo(id,updateReciboDTO);
  }

  @Get()
  async findAllRecibos(): Promise<Recibo[]> {
    return this.reciboService.findAllRecibos();
  }

  @Get(':id')
  async findReciboById(@Param('id') id: number): Promise<Recibo> {
    return this.reciboService.findReciboById(id);
  }

  @Delete(':id')
  async deleteRecibo(@Param('id') id: number): Promise<boolean> {
    return this.reciboService.deleteRecibo(id);
  }
}
