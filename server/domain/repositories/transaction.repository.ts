import { CreateTransactionDTO } from '../../infra/controllers/transaction/transaction.dto';
import { Transaction } from '../entities/transaction.entity';

export interface ITransactionRepository {
  findAll(): Promise<Transaction[]>;
  findOne(id: string): Promise<Transaction>;
  create(transaction: CreateTransactionDTO): Promise<Transaction>;
  delete(id: string): Promise<Transaction>;
}
