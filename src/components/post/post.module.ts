import { Module } from '@nestjs/common';
import PostResolver from './post.resolvers';

@Module({
  providers: [PostResolver],
})
export default class PostsModule {}
