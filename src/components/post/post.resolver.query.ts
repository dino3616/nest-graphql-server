import { Resolver, Query } from '@nestjs/graphql';
import { FindManyPostArgs } from '../../libs/prisma/generated/post/find-many-post/args';
import { FindUniquePostArgs } from '../../libs/prisma/generated/post/find-unique-post/args';
import { Post } from '../../libs/prisma/generated/post/post/model';
import PostService from './post.service';

@Resolver()
export default class PostQuery {
  constructor(private service: PostService) {}

  @Query(() => Post, { nullable: true })
  async findPostById(args: FindUniquePostArgs): Promise<Post | null> {
    const post = await this.service.findPost(args);

    return post;
  }

  @Query(() => [Post])
  async findPosts(args: FindManyPostArgs): Promise<Post[]> {
    const posts = this.service.findPosts(args);

    return posts;
  }

  @Query(() => [Post])
  async getAllPosts() {
    const posts = this.service.findPosts();

    return posts;
  }
}
