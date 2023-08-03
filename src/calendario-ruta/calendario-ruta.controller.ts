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

  @Post("createCalendarioRutaBatch")
  async createCalendarioRutaBatch(@Body() createCalendarioRutaDTO: CreateCalendarioRutaDTO,@Res() res: Response){
    let respuesta= await this.calendarioRutaService.createCalendarioRutaBatch(createCalendarioRutaDTO);
    return res.status(HttpStatus.OK).json({"data":respuesta});
    
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
  async findOneCalendarioRuta(@Res() res: Response,@Param('id') id: number){
    const calendarioRuta=await this.calendarioRutaService.findOneCalendarioRuta(id)
    console.log(calendarioRuta)
    return res.status(HttpStatus.OK).json({
      data: calendarioRuta,
    });
    
  }
  

  // @Delete(':id')
  // deleteCalendarioRuta(@Param('id') id: number): Promise<void> {
  //   console.log("......................")
  //   return this.calendarioRutaService.deleteCalendarioRuta(id);
  // }
  
  @Delete('/deleteBatch')
  async deleteCalendarioRutaBatch(@Body() createCalendarioRutaDTO: CreateCalendarioRutaDTO,@Res() res: Response) {

    // console.log("createCalendarioRutaDTO1")
    // console.log(createCalendarioRutaDTO)

    await this.calendarioRutaService.deleteCalendarioRutaBatch(createCalendarioRutaDTO);

    return res.status(HttpStatus.OK).json({
      data: "ok",
    });

  }
}
