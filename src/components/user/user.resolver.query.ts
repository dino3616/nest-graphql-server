import { UseGuards } from '@nestjs/common';
import { Resolver, Query, Args, Context } from '@nestjs/graphql';
import AuthGuard from '../../guards/auth.guard';
import { FindManyUserArgs } from '../../libs/prisma/generated/user/find-many-user/args';
import { FindUniqueUserArgs } from '../../libs/prisma/generated/user/find-unique-user/args';
import { User } from '../../libs/prisma/generated/user/user/model';
import UserService from './user.service';

@Resolver()
export default class UserQuery {
  constructor(private service: UserService) {}

  // eslint-disable-next-line class-methods-use-this
  @Query(() => String)
  @UseGuards(AuthGuard)
  getAuthorizationHeader(@Context() context): string {
    return context.authorization;
  }

  @Query(() => User, { nullable: true })
  async findUserById(@Args() args: FindUniqueUserArgs): Promise<User | null> {
    const user = await this.service.findUser(args);

    return user;
  }

  @Query(() => [User])
  async findUsers(@Args() args: FindManyUserArgs): Promise<User[]> {
    const users = this.service.findUsers(args);

    return users;
  }

  @Query(() => [User])
  async getAllUsers() {
    const users = this.service.findUsers();

    return users;
  }
}
