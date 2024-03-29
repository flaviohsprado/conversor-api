import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AmbientConfig } from '../../../domain/config/ambient.interface';
import { DatabaseConfig } from '../../../domain/config/database.interface';
import { JWTConfig } from '../../../domain/config/jwt.interface';
import { RedisConfig } from '../../../domain/config/redis.interface';

@Injectable()
export class EnvironmentConfigService
  implements DatabaseConfig, JWTConfig, AmbientConfig, RedisConfig
{
  constructor(private configService: ConfigService) {}

  //REDIS
  public getRedisHost(): string {
    return this.configService.get<string>('REDIS_HOST');
  }

  public getRedisPort(): number {
    return this.configService.get<number>('REDIS_PORT');
  }

  //AMBIENT
  public getEnvironment(): string {
    return this.configService.get<string>('ENVIRONMENT');
  }

  //JWT
  public getJwtSecret(): string {
    return this.configService.get<string>('JWT_SECRET');
  }

  public getJwtExpirationTime(): string {
    return this.configService.get<string>('JWT_EXPIRATION_TIME');
  }

  //DATABASE
  public getDatabaseHost(): string {
    return this.configService.get<string>('DATABASE_HOST');
  }

  public getDatabasePort(): number {
    return this.configService.get<number>('DATABASE_PORT');
  }

  public getDatabaseUser(): string {
    return this.configService.get<string>('DATABASE_USER');
  }

  public getDatabasePassword(): string {
    return this.configService.get<string>('DATABASE_PASSWORD');
  }

  public getDatabaseName(): string {
    return this.configService.get<string>('DATABASE_NAME');
  }

  public getDatabaseSchema(): string {
    return this.configService.get<string>('DATABASE_SCHEMA');
  }

  public getDatabaseSync(): boolean {
    return this.configService.get<boolean>('DATABASE_SYNCHRONIZE');
  }

  public getDatabaseType(): string {
    return this.configService.get<string>('DATABASE_TYPE');
  }

  //THIRD PARTY API
  public getAccessKey(): string {
    return this.configService.get<string>('ACCESS_KEY');
  }
}
