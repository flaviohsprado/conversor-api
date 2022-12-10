import { IsOptionalString } from '../../../main/decorators/validators/isOptionalString.decorator';
import { IsRequiredDate } from '../../../main/decorators/validators/isRequiredDate.decorator';
import { IsRequiredNumber } from '../../../main/decorators/validators/isRequiredNumber.decorator';
import { IsRequiredString } from '../../../main/decorators/validators/isRequiredString.decorator';

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
