import { Query, Resolver } from '@nestjs/graphql';
import PostModel from './post.model';

@Resolver(() => PostModel)
export default class PostResolver {
  @Query(() => [PostModel], { name: 'posts', nullable: true })
  static async getPosts() {
    return [
      { id: '1', title: 'yukarisan-kawaii-yatta-' },
      { id: '2', title: 'mikusanmo-kawaii-yatta-' },
    ];
  }
}
