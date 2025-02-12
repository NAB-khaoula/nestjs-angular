import { ConflictException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {

  constructor(
    @InjectRepository(User) 
    private readonly userRepository: Repository<User>){}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const {email} = createUserDto;
    const existingUser = await this.userRepository.findOne({where: {email}})

    if(existingUser){
      throw new ConflictException("User with this email already exists")
    }
    const user = this.userRepository.create(createUserDto);
    return this.userRepository.save(user);
  }
}
