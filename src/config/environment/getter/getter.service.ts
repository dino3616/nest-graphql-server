import { join } from 'path';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { GqlModuleOptions } from '@nestjs/graphql';

@Injectable()
export default class Env {
  constructor(private configService: ConfigService) {}

  isProduction(): boolean {
    return this.configService.get('NODE_ENV') === 'production';
  }

  get Port(): number | Error {
    const port = this.configService.get('PORT');
    if (!port) {
      return new Error('PORT environment variable must be specified.');
    }

    return port;
  }

  get DatabaseURL(): string | Error {
    const databaseURL = this.configService.get('DATABASE_URL');
    if (!databaseURL) {
      return new Error('DATABASE_URL environment variable must be specified.');
    }

    return databaseURL;
  }

  get GqlModuleOptionsFactory(): GqlModuleOptions {
    const devOptions: GqlModuleOptions = {
      path: '/graphql',
      autoSchemaFile: join(process.cwd(), './schema.gql'),
      sortSchema: true,
    };

    const prdOptions: GqlModuleOptions = {
      path: '/graphql',
      autoSchemaFile: true,
    };

    return this.isProduction() ? prdOptions : devOptions;
  }
}
