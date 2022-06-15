import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { CreateOneUserArgs } from '../../libs/prisma/generated/user/create-one-user/args';
import { DeleteOneUserArgs } from '../../libs/prisma/generated/user/delete-one-user/args';
import { UpdateOneUserArgs } from '../../libs/prisma/generated/user/update-one-user/args';
import { User } from '../../libs/prisma/generated/user/user/model';
import UserService from './user.service';

@Resolver()
export default class UserMutation {
  constructor(private service: UserService) {}

  @Mutation(() => User)
  async createUser(@Args() args: CreateOneUserArgs) {
    const user = this.service.create(args);

    return user;
  }

  @Mutation(() => User)
  async updateUser(@Args() args: UpdateOneUserArgs) {
    const user = this.service.update(args);

    return user;
  }

  @Mutation(() => User)
  async deleteUser(@Args() args: DeleteOneUserArgs) {
    const user = this.service.delete(args);

    return user;
  }
}
