import { Transaction } from '../../../server/domain/entities/transaction.entity';
import { IApiService } from '../../../server/domain/interfaces/api.interface';
import { IExceptionService } from '../../../server/domain/interfaces/exceptions.interface';
import { ILogger } from '../../../server/domain/logger/logger.interface';
import { ITransactionRepository } from '../../../server/domain/repositories/transaction.repository';
import { CreateTransactionUseCase } from '../../../server/domain/use-cases/transaction/create-transaction.usecase';
import { EnvironmentConfigService } from '../../../server/infra/config/environment-config/environment-config.service';

describe('uses-cases/transaction', () => {
  let createTransactionUseCases: CreateTransactionUseCase;
  let logger: ILogger;
  let exception: IExceptionService;
  let transactionRepository: ITransactionRepository;
  let apiService: IApiService;
  let environmentConfigService: EnvironmentConfigService;

  beforeEach(() => {
    logger = {} as ILogger;
    logger.log = jest.fn();

    exception = {} as IExceptionService;
    exception.throwBadRequestException = jest.fn();

    transactionRepository = {} as ITransactionRepository;
    transactionRepository.create = jest.fn();
    transactionRepository.findOne = jest.fn();

    apiService = {} as IApiService;
    apiService.getValue = jest.fn();

    createTransactionUseCases = new CreateTransactionUseCase(
      logger,
      transactionRepository,
      exception,
      apiService,
      environmentConfigService,
    );
  });

  describe('create-transaction', () => {
    it('should return an transaction object', async () => {
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
        .spyOn(createTransactionUseCases, 'execute')
        .mockReturnValue(Promise.resolve(result));

      const userId = 'userId';
      const from = 'from';
      const to = 'to';
      const amount = 1;

      expect(
        await createTransactionUseCases.execute(userId, from, to, amount),
      ).toEqual(result);
    });
  });
});
