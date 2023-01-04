import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './schemas/user.schema';
import { UsersRepository } from './user.repository';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class UsersService {
  constructor(private readonly userRepository: UsersRepository) {}

  async createUser(createUserDto: CreateUserDto): Promise<User> {
    return this.userRepository.create({
      user_id: uuidv4(),
      ...createUserDto,
    });
  }

  findAll(): Promise<User[]> {
    return this.userRepository.findAll();
  }

  findOne(user_id: string): Promise<User> {
    return this.userRepository.findById(user_id);
  }

  findByEmail(email: string): Promise<any> {
    return this.userRepository.findByEmail(email);
  }

  update(user_id: string, updateUserDto: UpdateUserDto) {
    return this.userRepository.update(updateUserDto, { user_id });
  }

  // remove(id: number) {
  //   return `This action removes a #${id} user`;
  // }
}
