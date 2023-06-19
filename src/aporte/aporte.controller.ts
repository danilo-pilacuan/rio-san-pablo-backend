import { Controller,Get,Post,Put,Delete,Res,HttpStatus,Body, Query, Param } from '@nestjs/common';
import { AporteService } from './aporte.service';
import { Request,Response } from 'express';

@Controller('aportes')
export class AporteController {
    constructor(private readonly aporteService:AporteService){

    }
    @Get()
    async getUsers(@Res() res:Response){
      
        const aportes = await this.aporteService.findAll();
        
        return res.status(HttpStatus.OK).json({
            aportes
        })
    }
}
