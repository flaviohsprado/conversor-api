import { Transaction } from '../../../server/domain/entities/transaction.entity';
import { IExceptionService } from '../../../server/domain/interfaces/exceptions.interface';
import { ILogger } from '../../../server/domain/logger/logger.interface';
import { ITransactionRepository } from '../../../server/domain/repositories/transaction.repository';
import { DeleteTransactionUseCase } from '../../../server/domain/use-cases/transaction/delete-transaction.usecase';

describe('uses-cases/transaction', () => {
  let deleteTransactionUseCases: DeleteTransactionUseCase;
  let logger: ILogger;
  let exception: IExceptionService;
  let transactionRepository: ITransactionRepository;

  beforeEach(() => {
    logger = {} as ILogger;
    logger.log = jest.fn();

    exception = {} as IExceptionService;
    exception.throwBadRequestException = jest.fn();
    exception.throwForbiddenException = jest.fn();
    exception.throwInternalServerErrorException = jest.fn();
    exception.throwNotFoundException = jest.fn();
    exception.throwUnauthorizedException = jest.fn();

    transactionRepository = {} as ITransactionRepository;
    transactionRepository.delete = jest.fn();

    deleteTransactionUseCases = new DeleteTransactionUseCase(
      logger,
      transactionRepository,
      exception,
    );
  });

  describe('delete-transaction', () => {
    it('should return an transaction object deleted', async () => {
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
        .spyOn(deleteTransactionUseCases, 'execute')
        .mockReturnValue(Promise.resolve(result));

      expect(await deleteTransactionUseCases.execute('id')).toEqual(result);
    });
  });
});
