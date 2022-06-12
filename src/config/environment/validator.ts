import { plainToClass } from 'class-transformer';
import { IsNotEmpty, IsNumber, IsString, validateSync } from 'class-validator';

class EnvValidator {
  NODE_ENV: 'development' | 'production' | 'test';

  @IsNumber()
  PORT = 3000;

  @IsNotEmpty()
  @IsString()
  DATABASE_URL: string;
}

const validate = (config: Record<string, unknown>) => {
  const validatedConfig = plainToClass(EnvValidator, config, {
    enableImplicitConversion: true,
  });

  const errors = validateSync(validatedConfig, {
    skipMissingProperties: false,
  });

  if (errors.length > 0) {
    throw new Error(errors.toString());
  }

  return validatedConfig;
};

export default validate;
