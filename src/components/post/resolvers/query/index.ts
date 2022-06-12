import { Resolver, Args, Query } from '@nestjs/graphql';
import PostModel from '../../post.model';
import PostService from '../../post.service';
import FindPostsArgs from './findPosts.args';

@Resolver()
export default class PostQuery {
  constructor(private service: PostService) {}

  @Query(() => PostModel, { nullable: true })
  async findPostById(@Args('id') id: string) {
    const posts = this.service.findUnique(id);

    return posts;
  }

  @Query(() => [PostModel])
  async findPosts(@Args() args: FindPostsArgs) {
    const posts = this.service.findMany(args);

    return posts;
  }

  @Query(() => [PostModel])
  async getAllPosts() {
    const posts = this.service.findMany();

    return posts;
  }
}
