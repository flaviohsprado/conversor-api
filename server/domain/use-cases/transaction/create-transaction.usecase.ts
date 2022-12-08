import { HttpStatus } from '@nestjs/common';
import { IApiService } from 'src/domain/interfaces/api.interface';
import { IExceptionService } from 'src/domain/interfaces/exceptions.interface';
import {
  ISuccessTransaction,
  ITransaction,
} from 'src/domain/interfaces/transaction.interface';
import { ITransactionRepository } from 'src/domain/repositories/transaction.repository';
import { EnvironmentConfigService } from 'src/infra/config/environment-config/environment-config.service';
import { CreateTransactionDTO } from 'src/infra/controllers/transaction/transaction.dto';
import { Transaction } from '../../entities/transaction.entity';
import { ILogger } from '../../logger/logger.interface';

export class CreateTransactionUseCase {
  constructor(
    private readonly logger: ILogger,
    private readonly repository: ITransactionRepository,
    private readonly exceptionService: IExceptionService,
    private readonly service: IApiService,
    private readonly environmentConfig: EnvironmentConfigService,
  ) {}

  public async execute(
    userId: string,
    from: string,
    to: string,
    amount: number,
  ): Promise<Transaction> {
    const newTransaction = await this.getTransaction(from, to, amount);

    const transaction = new CreateTransactionDTO({
      conversionRate: newTransaction.info.rate,
      dateTime: new Date(newTransaction.info.timestamp * 1000).toLocaleString(),
      sourceCurrency: from,
      destinationCurrency: to,
      sourceValue: amount,
      destinationValue: newTransaction.result,
      userId,
    });

    const createdtransaction = await this.repository.create(transaction);

    this.logger.log(
      'CreateTransactionUseCases execute()',
      'New Transaction have been inserted',
    );

    return createdtransaction;
  }

  private async getTransaction(
    from: string,
    to: string,
    amount: number,
  ): Promise<ISuccessTransaction> {
    const currencyBase = from || 'USD';
    const apiKey = this.environmentConfig.getAccessKey();

    const response = await this.service.getValue(
      `https://api.apilayer.com/exchangerates_data/convert?apikey=${apiKey}&from=${currencyBase}&to=${to}&amount=${amount}`,
    );

    const newTransaction: ITransaction = response.data as ITransaction;

    if (newTransaction.success === false) {
      this.exceptionService.throwBadRequestException({
        message: 'Error to get currency',
        statusCode: HttpStatus.BAD_REQUEST,
        error: newTransaction.error.info,
      });
    }

    return newTransaction as ISuccessTransaction;
  }
}
