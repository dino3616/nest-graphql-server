import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ApolloConfigInput } from 'apollo-server-types';

@Injectable()
export default class Env {
  constructor(private configService: ConfigService) {}

  get NodeEnv(): string {
    let nodeEnv = this.configService.get('NODE_ENV');
    if (!nodeEnv) {
      nodeEnv = 'production';
    }

    return nodeEnv;
  }

  get Port(): number {
    const port = this.configService.get('PORT');
    if (!port) {
      throw new Error('PORT environment variable must be specified.');
    }

    return port;
  }

  get DatabaseURL(): string {
    const databaseURL = this.configService.get('DATABASE_URL');
    if (!databaseURL) {
      throw new Error('DATABASE_URL environment variable must be specified.');
    }

    return databaseURL;
  }

  get ApolloKey(): string {
    const apolloKey = this.configService.get('APOLLO_KEY');
    if (!apolloKey) {
      throw new Error('APOLLO_KEY environment variable must be specified.');
    }

    return apolloKey;
  }

  get ApolloGraphId(): string {
    const apolloGraphId = this.configService.get('APOLLO_GRAPH_ID');
    if (!apolloGraphId) {
      throw new Error('APOLLO_GRAPH_ID environment variable must be specified.');
    }

    return apolloGraphId;
  }

  get ApolloStudioConfig(): ApolloConfigInput {
    return {
      key: this.ApolloKey,
      graphId: this.ApolloGraphId,
    };
  }
}
