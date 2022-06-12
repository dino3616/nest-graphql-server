import { Resolver, Args, Mutation } from '@nestjs/graphql';
import PostModel from '../../post.model';
import PostService from '../../post.service';
import CreatePostArgs from './createPost.args';
import UpdatePostArgs from './updatePost.args';

@Resolver()
export default class PostMutation {
  constructor(private service: PostService) {}

  @Mutation(() => PostModel)
  async createPost(@Args() args: CreatePostArgs) {
    const posts = this.service.create(args);

    return posts;
  }

  @Mutation(() => PostModel)
  async updatePost(@Args('id') id: string, @Args() args: UpdatePostArgs) {
    const posts = this.service.update(id, args);

    return posts;
  }

  @Mutation(() => PostModel)
  async deletePost(@Args('id') id: string) {
    const posts = this.service.delete(id);

    return posts;
  }
}
