import { Transaction } from '../../../server/domain/entities/transaction.entity';
import { ICacheManager } from '../../../server/domain/interfaces/cache.interface';
import { ITransactionRepository } from '../../../server/domain/repositories/transaction.repository';
import { FindAllTransactionUseCase } from '../../../server/domain/use-cases/transaction/find-all-transactions.usecase';

describe('uses-cases/transaction', () => {
  let findAllTransactionUseCases: FindAllTransactionUseCase;
  let transactionRepository: ITransactionRepository;
  let cacheManager: ICacheManager;

  beforeEach(() => {
    cacheManager = {} as ICacheManager;
    cacheManager.getCachedObject = jest.fn();
    cacheManager.setObjectInCache = jest.fn();

    transactionRepository = {} as ITransactionRepository;
    transactionRepository.findAll = jest.fn();

    findAllTransactionUseCases = new FindAllTransactionUseCase(
      transactionRepository,
      cacheManager,
    );
  });

  describe('find-all-transactions', () => {
    it('should return an array of transaction object.', async () => {
      const result: Transaction[] = [
        {
          id: 'id',
          conversionRate: 1,
          dateTime: new Date(),
          destinationCurrency: 'destinationCurrency',
          destinationValue: 1,
          sourceCurrency: 'sourceCurrency',
          sourceValue: 1,
          userId: 'userId',
          user: {
            id: 'id',
            username: 'username',
            email: 'email',
            password: 'password',
            createdAt: new Date(),
            updatedAt: new Date(),
          },
        },
      ];

      jest
        .spyOn(findAllTransactionUseCases, 'execute')
        .mockReturnValue(Promise.resolve(result));

      expect(await findAllTransactionUseCases.execute('userId')).toEqual(
        result,
      );
    });
  });
});
