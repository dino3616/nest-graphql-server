import { Query, Resolver } from '@nestjs/graphql';
import Env from '../../config/environment/getter/getter.service';
import PostModel from './post.model';

@Resolver(() => PostModel)
export default class PostResolver {
  constructor(private env: Env) {}

  // eslint-disable-next-line class-methods-use-this
  @Query(() => [PostModel], { name: 'posts', nullable: true })
  async getPosts() {
    return [
      { id: '1', title: 'yukarisan-kawaii-yatta-' },
      { id: '2', title: 'mikusanmo-kawaii-yatta-' },
    ];
  }

  @Query(() => String)
  envTest(): string {
    return this.env.DatabaseURL;
  }
}
