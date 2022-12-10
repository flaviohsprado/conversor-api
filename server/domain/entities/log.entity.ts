import { Entity, PrimaryGeneratedColumn } from 'typeorm';
import { IsOptionalStringColumn } from '../../main/decorators/columns/isOptionalStringColumn.decorator';
import { IsRequiredNumberColumn } from '../../main/decorators/columns/isRequiredNumberColumn.decorator';
import { IsRequiredStringColumn } from '../../main/decorators/columns/isRequiredStringColumn.decorator';

@Entity()
export class Log {
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @IsRequiredStringColumn()
  public ip: string;

  @IsRequiredStringColumn()
  public method: string;

  @IsRequiredStringColumn()
  public path: string;

  @IsRequiredNumberColumn()
  public statusCode: number;

  @IsOptionalStringColumn()
  public contentLength: string;

  @IsRequiredStringColumn()
  public userAgent: string;

  @IsRequiredStringColumn()
  public hostname: string;

  @IsRequiredStringColumn()
  public referer: string;

  @IsRequiredStringColumn()
  public body: string;

  @IsRequiredStringColumn()
  public headers: string;

  @IsRequiredStringColumn()
  public requestedAt: string;

  @IsRequiredStringColumn()
  public duration: string;
}
