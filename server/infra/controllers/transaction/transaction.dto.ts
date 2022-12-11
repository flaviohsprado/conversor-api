import { IsOptionalString } from '../../../domain/decorators/validators/isOptionalString.decorator';
import { IsRequiredDate } from '../../../domain/decorators/validators/isRequiredDate.decorator';
import { IsRequiredNumber } from '../../../domain/decorators/validators/isRequiredNumber.decorator';
import { IsRequiredString } from '../../../domain/decorators/validators/isRequiredString.decorator';

export class CreateTransactionDTO {
  @IsRequiredString()
  public userId: string;

  @IsRequiredString()
  public sourceCurrency: string;

  @IsRequiredString()
  public destinationCurrency: string;

  @IsRequiredNumber()
  public sourceValue: number;

  @IsRequiredNumber()
  public destinationValue: number;

  @IsRequiredNumber()
  public conversionRate: number;

  @IsRequiredDate()
  public dateTime: Date | string;

  constructor(props: CreateTransactionDTO) {
    Object.assign(this, props);
  }
}

export class TransactionOptionsDTO {
  @IsOptionalString()
  public userId: string;

  @IsRequiredString()
  public from: string;

  @IsRequiredString()
  public to: string;

  @IsRequiredNumber()
  public amount: number;

  constructor(props: TransactionOptionsDTO) {
    Object.assign(this, props);
  }
}
