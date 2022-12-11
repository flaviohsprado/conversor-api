import { IsOptionalString } from '../../../domain/decorators/validators/isOptionalString.decorator';
import { IsRequiredEmail } from '../../../domain/decorators/validators/isRequiredEmail.decorator';
import { IsRequiredString } from '../../../domain/decorators/validators/isRequiredString.decorator';

export class CreateUserDTO {
  @IsRequiredString()
  public username: string;

  @IsRequiredEmail()
  public email: string;

  @IsRequiredString()
  public password: string;
}

export class UpdateUserDTO {
  @IsOptionalString()
  public username?: string;

  @IsOptionalString()
  public email?: string;

  @IsOptionalString()
  public password?: string;
}
