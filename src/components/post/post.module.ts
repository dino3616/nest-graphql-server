import { Module } from '@nestjs/common';
import PostMutation from './post.resolver.mutation';
import PostQuery from './post.resolver.query';
import PostService from './post.service';

@Module({
  providers: [PostQuery, PostMutation, PostService],
})
export default class PostModule {}
