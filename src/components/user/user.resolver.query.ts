import { Resolver, Query } from '@nestjs/graphql';
import { FindManyUserArgs } from '../../libs/prisma/generated/user/find-many-user/args';
import { FindUniqueUserArgs } from '../../libs/prisma/generated/user/find-unique-user/args';
import { User } from '../../libs/prisma/generated/user/user/model';
import UserService from './user.service';

@Resolver()
export default class UserQuery {
  constructor(private service: UserService) {}

  @Query(() => User, { nullable: true })
  async findUserById(args: FindUniqueUserArgs): Promise<User> {
    const user = await this.service.findUser(args);

    return user;
  }

  @Query(() => [User])
  async findUsers(args: FindManyUserArgs): Promise<User[]> {
    const users = this.service.findUsers(args);

    return users;
  }

  @Query(() => [User])
  async getAllUsers() {
    const users = this.service.findUsers();

    return users;
  }
}
