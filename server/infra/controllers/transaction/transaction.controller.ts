import {
  Body,
  Controller,
  HttpCode,
  Inject,
  Param,
  Req,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiTags } from '@nestjs/swagger';
import { Transaction } from 'src/domain/entities/transaction.entity';
import { IAuthRequest } from 'src/domain/interfaces/authRequest.interface';
import { Public } from 'src/main/decorators/isPublicRoute.decorator';
import {
  CreateTransactionUseCase,
  DeleteTransactionUseCase,
  FindAllTransactionUseCase,
  FindOneTransactionUseCase,
} from '../../../domain/use-cases/transaction/index';
import { DeleteApiResponse } from '../../../main/decorators/requests/deleteApiResponse.decorator';
import { GetApiResponse } from '../../../main/decorators/requests/getApiResponse.decorator';
import { PostApiResponse } from '../../../main/decorators/requests/postApiResponse.decorator';
import { TransactionUsecasesProxyModule } from '../../usecases-proxy/transaction/transaction-usecases-proxy.module';
import { UseCaseProxy } from '../../usecases-proxy/usecase-proxy';
import { TransactionOptionsDTO } from './transaction.dto';
import { TransactionPresenter } from './transaction.presenter';

@ApiTags('Transaction')
@Controller('transactions')
export class TransactionController {
  constructor(
    @Inject(TransactionUsecasesProxyModule.GET_TRANSACTIONS_USECASES_PROXY)
    private readonly findAllTransactionUseCase: UseCaseProxy<FindAllTransactionUseCase>,
    @Inject(TransactionUsecasesProxyModule.GET_TRANSACTION_USECASES_PROXY)
    private readonly findOneTransactionUseCase: UseCaseProxy<FindOneTransactionUseCase>,
    @Inject(TransactionUsecasesProxyModule.POST_TRANSACTION_USECASES_PROXY)
    private readonly createTransactionUseCase: UseCaseProxy<CreateTransactionUseCase>,
    @Inject(TransactionUsecasesProxyModule.DELETE_TRANSACTION_USECASES_PROXY)
    private readonly deleteTransactionUseCase: UseCaseProxy<DeleteTransactionUseCase>,
  ) {}

  @GetApiResponse(TransactionPresenter)
  public async findAll(): Promise<TransactionPresenter[]> {
    const transactions = await this.findAllTransactionUseCase
      .getInstance()
      .execute();
    return transactions.map(
      (transaction) => new TransactionPresenter(transaction),
    );
  }

  @GetApiResponse(TransactionPresenter, ':id')
  public async findOne(@Param('id') id: string): Promise<TransactionPresenter> {
    const transaction = await this.findOneTransactionUseCase
      .getInstance()
      .execute(id);
    return new TransactionPresenter(transaction);
  }

  @Public()
  @UseGuards(AuthGuard('jwt'))
  @PostApiResponse(TransactionPresenter)
  public async create(
    @Req() request: IAuthRequest,
    @Body() options: TransactionOptionsDTO,
  ): Promise<TransactionPresenter> {
    const createOptions = new TransactionOptionsDTO({
      ...options,
      userId: request.user.id,
    });

    const { userId, from, to, amount } = createOptions;

    const createdTransaction = await this.createTransactionUseCase
      .getInstance()
      .execute(userId, from, to, amount);

    return new TransactionPresenter(createdTransaction);
  }

  @HttpCode(204)
  @DeleteApiResponse('/:id')
  public async delete(@Param('id') id: string): Promise<Transaction> {
    return await this.deleteTransactionUseCase.getInstance().execute(id);
  }
}
