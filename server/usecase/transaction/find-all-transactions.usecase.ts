import { Transaction } from '../../domain/entities/transaction.entity';
import { ICacheManager } from '../../domain/interfaces/cache.interface';
import { ITransactionRepository } from '../../domain/repositories/transaction.repository';

export class FindAllTransactionUseCase {
  constructor(
    private readonly repository: ITransactionRepository,
    private readonly cacheManager: ICacheManager,
  ) {}

  public async execute(userId: string): Promise<Transaction[]> {
    const cachedTransactions = await this.cacheManager.getCachedObject<
      Transaction[]
    >('transactions');

    if (cachedTransactions) return cachedTransactions;

    const transactions = await this.repository.findAll(userId);

    await this.cacheManager.setObjectInCache('transactions', transactions);

    return transactions;
  }
}
