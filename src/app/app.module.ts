import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import Components from '../components';
import EnvModule from '../config/environment/getter/getter.module';
import Env from '../config/environment/getter/getter.service';
import PrismaModule from '../libs/prisma/prisma.module';

@Module({
  imports: [
    EnvModule,
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      inject: [Env],
      useFactory: (env: Env) => env.GqlModuleOptionsFactory,
    }),
    PrismaModule,
    ...Components,
  ],
})
export default class AppModule {}
