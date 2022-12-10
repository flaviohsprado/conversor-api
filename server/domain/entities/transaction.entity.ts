import { Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { IsRequiredDateColumn } from '../../main/decorators/columns/isRequiredDateColumn.decorator';
import { IsRequiredNumberColumn } from '../../main/decorators/columns/isRequiredNumberColumn.decorator';
import { IsRequiredStringColumn } from '../../main/decorators/columns/isRequiredStringColumn.decorator';
import { User } from './user.entity';

@Entity()
export class Transaction {
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @IsRequiredStringColumn()
  public userId: string;

  @IsRequiredStringColumn()
  public sourceCurrency: string;

  @IsRequiredStringColumn()
  public destinationCurrency: string;

  @IsRequiredNumberColumn()
  public sourceValue: number;

  @IsRequiredNumberColumn()
  public destinationValue: number;

  @IsRequiredNumberColumn()
  public conversionRate: number;

  @IsRequiredDateColumn()
  public dateTime: Date;

  @ManyToOne(() => User, (user) => user.id, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'userId' })
  public user: User;
}
