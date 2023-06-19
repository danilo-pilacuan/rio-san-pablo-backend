import { Controller,Get,Post,Put,Delete,Res,HttpStatus,Body, Query, Param } from '@nestjs/common';
import { SocioService } from './socio.service';
import { Request,Response } from 'express';
import { CreateSocioDTO, UpdateSocioDTO } from './dto/socio.dto';

@Controller('socios')
export class SocioController {
    constructor(private readonly socioService:SocioService){

    }

    @Post()
    async createUser(@Res() res,@Body() createSocioDTO:CreateSocioDTO){
        
        const createdUser = await this.socioService.createSocio(createSocioDTO);
        
        return res.status(HttpStatus.OK).json({
            createdUser
        })
    }

    @Get()
    async getSocios(@Res() res:Response){
      
        const socios = await this.socioService.findAll();
        
        return res.status(HttpStatus.OK).json({
            "data":socios
        })
    }

    @Get(':id')
    async getSocioById(@Res() res,@Param('id') socioId:number){
     
        const socio = await this.socioService.findOne(socioId);

        if(socio)
        {
            return res.status(HttpStatus.OK).json({
                "data":{...socio}
            })
        }
        else
        {
            return res.status(HttpStatus.NOT_FOUND).json({
                error:"socio not found"
            })
        }
    }


    @Put()
    
    async updateSocio(@Res() res,@Body() updateSocioDTO:UpdateSocioDTO){
  
        const updatedSocio = await this.socioService.updateSocio(updateSocioDTO);

        return res.status(HttpStatus.OK).json({
            updatedSocio
        })
    }

    @Delete(':id')
    async deleteSocio(@Res() res,@Param('id') socioId:number){
    
        const deletedSocio = await this.socioService.remove(socioId);

        if(deletedSocio)
        {
            return res.status(HttpStatus.OK).json({
                "ok":"ok"
            })    
        }
        else
        {
            return res.status(HttpStatus.NOT_FOUND).json({
                "error":"error"
            })    
        }
    }
}
