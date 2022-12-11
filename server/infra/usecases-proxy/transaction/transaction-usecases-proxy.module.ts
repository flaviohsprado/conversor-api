import { DynamicModule, Module } from '@nestjs/common';
import { EnvironmentConfigService } from '../../../infra/config/environment-config/environment-config.service';
import { ApiConfigModule } from '../../../infra/services/api/api.module';
import { ApiConfigService } from '../../../infra/services/api/api.service';
import {
  CreateTransactionUseCase,
  DeleteTransactionUseCase,
  FindAllTransactionUseCase,
  FindOneTransactionUseCase,
} from '../../../usecase/transaction';
import { EnvironmentConfigModule } from '../../config/environment-config/environment-config.module';
import { CacheConfigModule } from '../../config/redis/cache.module';
import { CacheService } from '../../config/redis/cache.service';
import { ExceptionsModule } from '../../exceptions/exceptions.module';
import { ExceptionsService } from '../../exceptions/exceptions.service';
import { LoggerModule } from '../../logger/logger.module';
import { LoggerService } from '../../logger/logger.service';
import { RepositoriesModule } from '../../repositories/repositories.module';
import { DatabaseTransactionRepository } from '../../repositories/transaction.repository';
import { UseCaseProxy } from '../usecase-proxy';

@Module({
  imports: [
    LoggerModule,
    EnvironmentConfigModule,
    RepositoriesModule,
    ExceptionsModule,
    CacheConfigModule,
    ApiConfigModule,
  ],
})
export class TransactionUsecasesProxyModule {
  static GET_TRANSACTION_USECASES_PROXY = 'getTransactionUsecasesProxy';
  static GET_TRANSACTIONS_USECASES_PROXY = 'getTransactionsUsecasesProxy';
  static POST_TRANSACTION_USECASES_PROXY = 'postTransactionUsecasesProxy';
  static DELETE_TRANSACTION_USECASES_PROXY = 'deleteTransactionUsecasesProxy';

  static register(): DynamicModule {
    return {
      module: TransactionUsecasesProxyModule,
      providers: [
        {
          inject: [DatabaseTransactionRepository, CacheService],
          provide:
            TransactionUsecasesProxyModule.GET_TRANSACTIONS_USECASES_PROXY,
          useFactory: (
            repository: DatabaseTransactionRepository,
            cacheService: CacheService,
          ) =>
            new UseCaseProxy(
              new FindAllTransactionUseCase(repository, cacheService),
            ),
        },
        {
          inject: [
            DatabaseTransactionRepository,
            ExceptionsService,
            CacheService,
          ],
          provide:
            TransactionUsecasesProxyModule.GET_TRANSACTION_USECASES_PROXY,
          useFactory: (
            repository: DatabaseTransactionRepository,
            exceptionService: ExceptionsService,
            cacheService: CacheService,
          ) =>
            new UseCaseProxy(
              new FindOneTransactionUseCase(
                repository,
                exceptionService,
                cacheService,
              ),
            ),
        },
        {
          inject: [
            LoggerService,
            DatabaseTransactionRepository,
            ExceptionsService,
            ApiConfigService,
            EnvironmentConfigService,
          ],
          provide:
            TransactionUsecasesProxyModule.POST_TRANSACTION_USECASES_PROXY,
          useFactory: (
            logger: LoggerService,
            repository: DatabaseTransactionRepository,
            exceptionService: ExceptionsService,
            service: ApiConfigService,
            config: EnvironmentConfigService,
          ) =>
            new UseCaseProxy(
              new CreateTransactionUseCase(
                logger,
                repository,
                exceptionService,
                service,
                config,
              ),
            ),
        },
        {
          inject: [
            LoggerService,
            DatabaseTransactionRepository,
            ExceptionsService,
          ],
          provide:
            TransactionUsecasesProxyModule.DELETE_TRANSACTION_USECASES_PROXY,
          useFactory: (
            logger: LoggerService,
            repository: DatabaseTransactionRepository,
            exceptionService: ExceptionsService,
          ) =>
            new UseCaseProxy(
              new DeleteTransactionUseCase(
                logger,
                repository,
                exceptionService,
              ),
            ),
        },
      ],
      exports: [
        TransactionUsecasesProxyModule.GET_TRANSACTIONS_USECASES_PROXY,
        TransactionUsecasesProxyModule.GET_TRANSACTION_USECASES_PROXY,
        TransactionUsecasesProxyModule.POST_TRANSACTION_USECASES_PROXY,
        TransactionUsecasesProxyModule.DELETE_TRANSACTION_USECASES_PROXY,
      ],
    };
  }
}
