import { Controller, Get, Post, Put, Delete, Param, Body, Res, HttpStatus } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDTO, UpdateUserDTO } from './dto/user.dto';
import { User } from './user.entity';
import { Response } from 'express';


@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @Post()
  createUser(@Body() createUserDTO: CreateUserDTO): Promise<User> {
    return this.userService.createUser(createUserDTO);
  }

  @Put(':id')
  updateUser(@Param('id') id: number, @Body() updateUserDTO: UpdateUserDTO): Promise<User | null> {
    return this.userService.updateUser(id, updateUserDTO);
  }

  @Get()
  async findAllUsers(@Res() res: Response) {
    const users = await this.userService.findAllUsers();
    return res.status(HttpStatus.OK).json({
      data: users
    });

    return 
  }

  @Get(':id')
  findOneUser(@Param('id') id: number): Promise<User | null> {
    return this.userService.findOneUser(id);
  }
  
  @Post('login')
  async loginUser(@Body() createUserDTO: CreateUserDTO,@Res() res): Promise<User | null> {
    console.log("llllllllloooooooooooooggggggggggiiiiiiiiiiiiinnnnnnnn")
    console.log(createUserDTO)
    const usuario = await this.userService.loginUser(createUserDTO);
    if (usuario) {
      if(usuario.clave==createUserDTO.clave)
      {
        return res.status(HttpStatus.OK).json({ "usuario": usuario });
      }
      else
      {
        return res.status(HttpStatus.NOT_FOUND).json({ error: 'Usuario not found' });  
      }
      
    } else {
      return res.status(HttpStatus.NOT_FOUND).json({ error: 'Usuario not found' });
    }

    // return res.status(HttpStatus.OK).json({
    //   "ok":"ok"
    // })    
    //return this.userService.findOneUser(id);
  }

  @Delete(':id')
  deleteUser(@Param('id') id: number): Promise<void> {
    return this.userService.deleteUser(id);
  }
}
