import { Module } from '@nestjs/common';
import PostService from './post.service';
import PostMutation from './resolvers/mutation';
import PostQuery from './resolvers/query';

@Module({
  providers: [PostQuery, PostMutation, PostService],
})
export default class PostModule {}
