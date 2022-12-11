import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Transaction } from '../../domain/entities/transaction.entity';
import { ITransactionRepository } from '../../domain/repositories/transaction.repository';

@Injectable()
export class DatabaseTransactionRepository implements ITransactionRepository {
  constructor(
    @InjectRepository(Transaction)
    private readonly transactionEntityRepository: Repository<Transaction>,
  ) {}

  public async findAll(userId: string): Promise<Transaction[]> {
    return this.transactionEntityRepository.find({
      where: { userId },
    });
  }

  public async findOne(id: string): Promise<Transaction> {
    return await this.transactionEntityRepository.findOne({ where: { id } });
  }

  public async create(transaction: Transaction): Promise<Transaction> {
    const newTransaction = this.transactionEntityRepository.create(transaction);
    return this.transactionEntityRepository.save(newTransaction);
  }

  public async delete(id: string): Promise<Transaction> {
    const transaction = await this.transactionEntityRepository.findOne({
      where: { id },
    });

    if (transaction) {
      this.transactionEntityRepository.delete(id);
      return transaction;
    }
  }
}
