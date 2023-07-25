import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { CreateUserDTO, UpdateUserDTO } from './dto/user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async createUser(createUserDTO: CreateUserDTO): Promise<User> {
    const user = this.userRepository.create(createUserDTO);
    return this.userRepository.save(user);
  }

  async loginUser(createUserDTO: CreateUserDTO): Promise<User|null> {
    
    const user = await this.userRepository.findOne({
      where:{
        correo:createUserDTO.correo
      }
    });
    console.log(user)
    if (!user) {
      console.log("nullllllllllllll")
      return null;
    }

    console.log("notttttttttt")

    return user;
  }

  async updateUser(id: number, updateUserDTO: UpdateUserDTO): Promise<User | null> {
    const user = await this.userRepository.findOneBy({id});
    if (!user) {
      return null;
    }

    Object.assign(user, updateUserDTO);
    return this.userRepository.save(user);
  }

  async findAllUsers(): Promise<User[]> {
    return this.userRepository.find();
  }

  async findOneUser(id: number): Promise<User | null> {
    return this.userRepository.findOneBy({id});
  }

  async deleteUser(id: number): Promise<void> {
    await this.userRepository.delete(id);
  }
}
