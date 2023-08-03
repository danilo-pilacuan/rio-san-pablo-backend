import { Controller,Get,Post,Put,Delete,Res,HttpStatus,Body, Query, Param, UseInterceptors, UploadedFiles } from '@nestjs/common';
import { UnidadService } from './unidad.service';
import { Request,Response } from 'express';
import { CreateUnidadDTO, UpdateUnidadDTO } from './dto/unidad.dto';
import { FileFieldsInterceptor, FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { Helper } from 'src/shared/helperUnidad';

@Controller('unidads')
export class UnidadController {
    constructor(private readonly unidadService:UnidadService){

    }

    @Post('uploadImages')
    @UseInterceptors(FileFieldsInterceptor([
        { name: 'fotoUnidad', maxCount: 1 },
    ],
    {
        storage: diskStorage({
        destination: Helper.destinationPath,
        filename: Helper.customFileName,
        }),
    },))
    async uploadFiles(@Res() res,@Body() createUnidadDTO: CreateUnidadDTO,@UploadedFiles() files: { fotoUnidad?: Express.Multer.File[]}) {
        
        console.log(files);
        console.log(createUnidadDTO);


        const createdUnidad = await this.unidadService.createUnidadImg(createUnidadDTO,'assets/unidades/'+files.fotoUnidad[0].filename);
        return res.status(HttpStatus.OK).json({ createdUnidad });
        //return res.status(HttpStatus.OK).json({ "ok":"ok" });
    }



    @Post()
    async createUser(@Res() res,@Body() createUnidadDTO:CreateUnidadDTO){
        
        const createdUser = await this.unidadService.createUnidad(createUnidadDTO);
        
        return res.status(HttpStatus.OK).json({
            createdUser
        })
    }

    @Get()
    async getUnidads(@Res() res:Response){
      
        const unidads = await this.unidadService.findAll();
        
        return res.status(HttpStatus.OK).json({
            "data":unidads
        })
    }

    @Get(':id')
    async getUnidadById(@Res() res,@Param('id') unidadId:number){
     
        const unidad = await this.unidadService.findOne(unidadId);

        if(unidad)
        {
            return res.status(HttpStatus.OK).json({
                "data":{...unidad}
            })
        }
        else
        {
            return res.status(HttpStatus.NOT_FOUND).json({
                error:"unidad not found"
            })
        }
    }


    @Put()
    
    async updateUnidad(@Res() res,@Body() updateUnidadDTO:UpdateUnidadDTO){
  
        const updatedUnidad = await this.unidadService.updateUnidad(updateUnidadDTO);

        return res.status(HttpStatus.OK).json({
            updatedUnidad
        })
    }

    @Put('withImages')
    @UseInterceptors(FileFieldsInterceptor([
        { name: 'fotoUnidad', maxCount: 1 },
        
    ],
    {
        storage: diskStorage({
        destination: Helper.destinationPath,
        filename: Helper.customFileName,
        }),
    },))
    async updateInidadImg(@Res() res,@Body() updateUnidadDTO: UpdateUnidadDTO,@UploadedFiles() files: { fotoUnidad?: Express.Multer.File[]}) {
        
        console.log(files);
        console.log(updateUnidadDTO);


        const unidadUpdated = await this.unidadService.updateUnidadImg(updateUnidadDTO,'assets/unidades/'+files.fotoUnidad[0].filename);
        return res.status(HttpStatus.OK).json({ unidadUpdated });
        //return res.status(HttpStatus.OK).json({ "ok":"ok" });
    }


    @Delete(':id')
    async deleteUnidad(@Res() res,@Param('id') unidadId:number){
    
        const deletedUnidad = await this.unidadService.remove(unidadId);

        if(deletedUnidad)
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
