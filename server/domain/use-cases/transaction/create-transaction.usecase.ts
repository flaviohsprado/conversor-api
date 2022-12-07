import { ITransactionRepository } from 'src/domain/repositories/transaction.repository';
import { CreateTransactionDTO } from '../../../infra/controllers/transaction/transaction.dto';
import { Transaction } from '../../entities/transaction.entity';
import { ILogger } from '../../logger/logger.interface';

export class CreateTransactionUseCase {
  constructor(
    private readonly logger: ILogger,
    private readonly repository: ITransactionRepository,
  ) {}

  public async execute(
    transaction: CreateTransactionDTO,
  ): Promise<Transaction> {
    const createdtransaction = await this.repository.create(transaction);

    this.logger.log(
      'CreateTransactionUseCases execute()',
      'New Transaction have been inserted',
    );

    return createdtransaction;
  }
}
