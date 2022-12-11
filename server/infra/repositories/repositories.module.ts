import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Transaction } from '../../domain/entities/transaction.entity';
import { User } from '../../domain/entities/user.entity';
import { TypeOrmConfigModule } from '../config/typeorm/typeorm.module';
import { DatabaseTransactionRepository } from './transaction.repository';
import { DatabaseUserRepository } from './user.repository';

@Module({
  imports: [TypeOrmConfigModule, TypeOrmModule.forFeature([User, Transaction])],
  providers: [DatabaseUserRepository, DatabaseTransactionRepository],
  exports: [DatabaseUserRepository, DatabaseTransactionRepository],
})
export class RepositoriesModule {}
