import { Module } from '@nestjs/common';
import { TransactionUsecasesProxyModule } from '../usecases-proxy/transaction/transaction-usecases-proxy.module';
import { UserUsecasesProxyModule } from '../usecases-proxy/user/user-usecases-proxy.module';
import { AuthUsecasesProxyModule } from './../usecases-proxy/auth/auth-usecases-proxy.module';
import { AuthController } from './auth/auth.controller';
import { TransactionController } from './transaction/transaction.controller';
import { UserController } from './user/user.controller';

@Module({
  imports: [
    UserUsecasesProxyModule.register(),
    AuthUsecasesProxyModule.register(),
    TransactionUsecasesProxyModule.register(),
  ],
  controllers: [UserController, AuthController, TransactionController],
  exports: [
    UserUsecasesProxyModule.register(),
    AuthUsecasesProxyModule.register(),
    TransactionUsecasesProxyModule.register(),
  ],
})
export class ControllersModule {}
