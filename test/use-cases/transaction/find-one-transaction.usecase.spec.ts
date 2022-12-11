import { Transaction } from '../../../server/domain/entities/transaction.entity';
import { ICacheManager } from '../../../server/domain/interfaces/cache.interface';
import { IExceptionService } from '../../../server/domain/interfaces/exceptions.interface';
import { DatabaseTransactionRepository } from '../../../server/infra/repositories/transaction.repository';
import { FindOneTransactionUseCase } from '../../../server/usecase/transaction/find-one-transaction.usecase';

describe('uses-cases/transaction', () => {
  let findOneTransactionUseCases: FindOneTransactionUseCase;
  let transactionRepository: DatabaseTransactionRepository;
  let cacheManager: ICacheManager;
  let exception: IExceptionService;

  beforeEach(() => {
    cacheManager = {} as ICacheManager;
    cacheManager.getCachedObject = jest.fn();
    cacheManager.setObjectInCache = jest.fn();

    transactionRepository = {} as DatabaseTransactionRepository;
    transactionRepository.findOne = jest.fn();

    exception = {} as IExceptionService;
    exception.throwNotFoundException = jest.fn();

    findOneTransactionUseCases = new FindOneTransactionUseCase(
      transactionRepository,
      exception,
      cacheManager,
    );
  });

  describe('find-one-transaction', () => {
    it('should return an transaction object.', async () => {
      const result: Transaction = {
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
      };

      jest
        .spyOn(findOneTransactionUseCases, 'execute')
        .mockReturnValue(Promise.resolve(result));

      expect(await findOneTransactionUseCases.execute('id')).toEqual(result);
    });
  });
});
