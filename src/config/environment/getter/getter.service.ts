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

  get Port(): number {
    return this.configService.get('PORT');
  }

  get DatabaseURL(): string {
    return this.configService.get('DATABASE_URL');
  }

  get GqlModuleOptionsFactory(): GqlModuleOptions {
    const devOptions: GqlModuleOptions = {
      path: "/graphql",
      autoSchemaFile: join(process.cwd(), './schema.gql'),
      sortSchema: true,
    };

    const prdOptions: GqlModuleOptions = {
      path: "/graphql",
      autoSchemaFile: true,
    };

    return this.isProduction() ? prdOptions : devOptions;
  }
}
