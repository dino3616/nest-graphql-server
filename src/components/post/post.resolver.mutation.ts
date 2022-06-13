import { Resolver, Mutation } from '@nestjs/graphql';
import { CreateOnePostArgs } from '../../libs/prisma/generated/post/create-one-post/args';
import { DeleteOnePostArgs } from '../../libs/prisma/generated/post/delete-one-post/args';
import { Post } from '../../libs/prisma/generated/post/post/model';
import { UpdateOnePostArgs } from '../../libs/prisma/generated/post/update-one-post/args';
import PostService from './post.service';

@Resolver()
export default class PostMutation {
  constructor(private service: PostService) {}

  @Mutation(() => Post)
  async createPost(args: CreateOnePostArgs) {
    const post = this.service.create(args);

    return post;
  }

  @Mutation(() => Post)
  async updatePost(args: UpdateOnePostArgs) {
    const post = this.service.update(args);

    return post;
  }

  @Mutation(() => Post)
  async deletePost(args: DeleteOnePostArgs) {
    const post = this.service.delete(args);

    return post;
  }
}
