import { HttpStatus } from '@nestjs/common';
import { Transaction } from '../../entities/transaction.entity';
import { IExceptionService } from '../../interfaces/exceptions.interface';
import { ILogger } from '../../logger/logger.interface';
import { ITransactionRepository } from '../../repositories/transaction.repository';

export class DeleteTransactionUseCase {
  constructor(
    private readonly logger: ILogger,
    private readonly repository: ITransactionRepository,
    private readonly exceptionService: IExceptionService,
  ) {}

  public async execute(id: string): Promise<Transaction> {
    const transactionDeleted = await this.repository.delete(id);

    if (transactionDeleted) {
      this.logger.log(
        'DeleteTransactionUseCases execute()',
        `Transaction ${id} have been deleted`,
      );

      return transactionDeleted;
    } else {
      this.exceptionService.throwNotFoundException({
        message: 'Transaction not found!',
        statusCode: HttpStatus.NOT_FOUND,
      });
    }
  }
}
