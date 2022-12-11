import {
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { IsRequiredStringColumn } from '../decorators/columns/isRequiredStringColumn.decorator';
import { Transaction } from './transaction.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @IsRequiredStringColumn()
  public username: string;

  @IsRequiredStringColumn()
  public email: string;

  @IsRequiredStringColumn()
  public password: string;

  @CreateDateColumn()
  public createdAt: Date;

  @UpdateDateColumn()
  public updatedAt: Date;

  @OneToMany(() => Transaction, (transaction) => transaction.user, {
    cascade: true,
    onDelete: 'CASCADE',
    nullable: true,
  })
  public transactions?: Transaction[];
}
