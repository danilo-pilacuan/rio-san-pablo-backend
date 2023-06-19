import { Controller,Get,Post,Put,Delete,Res,HttpStatus,Body, Query, Param } from '@nestjs/common';
import { UsersService } from './users.service';
import { Request,Response } from 'express';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService:UsersService){

    }
    @Get()
    async getUsers(@Res() res:Response){
      
        const users = await this.usersService.findAll();
        
        return res.status(HttpStatus.OK).json({
            users
        })
    }
}
