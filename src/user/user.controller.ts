import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDTO, UpdateUserDTO } from './dto/user.dto';
import { User } from './user.entity';

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
  findAllUsers(): Promise<User[]> {
    return this.userService.findAllUsers();
  }

  @Get(':id')
  findOneUser(@Param('id') id: number): Promise<User | null> {
    return this.userService.findOneUser(id);
  }

  @Delete(':id')
  deleteUser(@Param('id') id: number): Promise<void> {
    return this.userService.deleteUser(id);
  }
}
