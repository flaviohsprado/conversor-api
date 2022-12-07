import { ApiProperty } from '@nestjs/swagger';

export class TransactionPresenter {
  @ApiProperty()
  public id: string;

  @ApiProperty()
  public userId: string;

  @ApiProperty()
  public sourceCurrency: string;

  @ApiProperty()
  public destinationCurrency: string;

  @ApiProperty()
  public sourceValue: number;

  @ApiProperty()
  public conversionRate: number;

  @ApiProperty()
  public dateTime: Date;

  constructor(Transaction: TransactionPresenter) {
    Object.assign(this, Transaction);
  }
}
