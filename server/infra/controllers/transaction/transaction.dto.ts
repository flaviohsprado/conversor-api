import { IsRequiredDate } from 'src/main/decorators/validators/isRequiredDate.decorator';
import { IsRequiredNumber } from 'src/main/decorators/validators/isRequiredNumber.decorator';
import { IsRequiredString } from 'src/main/decorators/validators/isRequiredString.decorator';

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
  public conversionRate: number;

  @IsRequiredDate()
  public dateTime: Date;
}
