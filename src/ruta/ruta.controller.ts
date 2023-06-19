import { Controller,Get,Post,Put,Delete,Res,HttpStatus,Body, Query, Param } from '@nestjs/common';
import { RutaService } from './ruta.service';
import { Request,Response } from 'express';

@Controller('rutas')
export class RutaController {
    constructor(private readonly rutaService:RutaService){

    }
    @Get()
    async getUsers(@Res() res:Response){
      
        const rutas = await this.rutaService.findAll();
        
        return res.status(HttpStatus.OK).json({
            rutas
        })
    }
}
