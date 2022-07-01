import { Injectable } from '@nestjs/common';

import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  public users: CreateUserDto[] = [{
    username: 'admin',
    password: 'admin',
    email: 'admin@gmail.com',
  }, {
    username: 'User1',
    password: 'admin',
    email: 'user1@gmail.com',
  }, {
    username: 'user2',
    password: 'admin',
    email: 'user2@gmail.com',
  }]

  getUserByName(username: string): CreateUserDto {
    return this.users.find(user => user.username === username);
  }


  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }

  findAll() {
    return `This action returns all user`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
