import { ClassSerializerInterceptor, Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { PassportModule } from '@nestjs/passport';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { JwtAuthGuard } from './infra/common/guards/jwt-auth.guard';
import { TransformResponseInterceptor } from './infra/common/interceptor/transformResponse.interceptor';
import { JwtStrategy } from './infra/common/strategies/jwt.strategy';
import { LocalStrategy } from './infra/common/strategies/local.strategy';
import { EnvironmentConfigModule } from './infra/config/environment-config/environment-config.module';
import { ControllersModule } from './infra/controllers/controllers.module';
import { ExceptionsModule } from './infra/exceptions/exceptions.module';
import { LoggerModule } from './infra/logger/logger.module';
import { ApiConfigModule } from './infra/services/api/api.module';
import { BcryptModule } from './infra/services/bcrypt/bcrypt.module';
import { JwtModule as JwtServiceModule } from './infra/services/jwt/jwt.module';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'documentation'),
      renderPath: '/documentation',
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'coverage/lcov-report'),
      renderPath: '/coverage',
    }),
    PassportModule,
    LoggerModule,
    ExceptionsModule,
    JwtServiceModule,
    BcryptModule,
    EnvironmentConfigModule,
    ControllersModule,
    ApiConfigModule,
  ],
  providers: [
    {
      provide: 'APP_INTERCEPTOR',
      useClass: ClassSerializerInterceptor,
    },
    {
      provide: 'APP_INTERCEPTOR',
      useClass: TransformResponseInterceptor,
    },
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
    JwtStrategy,
    LocalStrategy,
  ],
})
export class AppModule {
  /*configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }*/
}
