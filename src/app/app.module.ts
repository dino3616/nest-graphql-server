import { join } from 'path';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import PostsModule from '../components/post/post.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      path: '/graphql',
      introspection: true,
      autoSchemaFile: join(process.cwd(), './schema.gql'),
      sortSchema: true,
    }),
    PostsModule,
  ],
})
export default class AppModule {}
