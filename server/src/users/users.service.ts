import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  // TODO: Implement user-related business logic
  findAll() {
    return 'This action returns all users';
  }

  findOne(id: number) {
    return `This action returns user #${id}`;
  }

  create(createUserDto: any) {
    return 'This action creates a new user';
  }

  update(id: number, updateUserDto: any) {
    return `This action updates user #${id}`;
  }

  remove(id: number) {
    return `This action removes user #${id}`;
  }
}