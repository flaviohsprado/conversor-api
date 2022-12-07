import { Transaction } from '../../entities/transaction.entity';
import { ICacheManager } from '../../interfaces/cache.interface';
import { IExceptionService } from '../../interfaces/exceptions.interface';
import { ITransactionRepository } from '../../repositories/transaction.repository';

export class FindOneTransactionUseCase {
  constructor(
    private readonly repository: ITransactionRepository,
    private readonly exceptionService: IExceptionService,
    private readonly cacheManager: ICacheManager,
  ) {}

  public async execute(id: string): Promise<Transaction> {
    const cachedTransaction =
      await this.cacheManager.getCachedObject<Transaction>('transaction');

    if (cachedTransaction) return cachedTransaction;

    const transaction: Transaction = await this.repository.findOne(id);

    if (!transaction)
      this.exceptionService.throwNotFoundException({
        message: 'Transaction not found',
      });

    await this.cacheManager.setObjectInCache('transaction', transaction);

    return transaction;
  }
}
