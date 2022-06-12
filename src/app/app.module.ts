import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import PostsModule from '../components/post/post.module';
import EnvModule from '../config/environment/getter/getter.module';
import Env from '../config/environment/getter/getter.service';

@Module({
  imports: [
    EnvModule,
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      inject: [Env],
      useFactory: (env: Env) => env.GqlModuleOptionsFactory,
    }),
    PostsModule,
  ],
})
export default class AppModule {}
