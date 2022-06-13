import { Module } from '@nestjs/common';
import UserMutation from './user.resolver.mutation';
import UserQuery from './user.resolver.query';
import UserService from './user.service';

@Module({
  providers: [UserQuery, UserMutation, UserService],
})
export default class UserModule {}
