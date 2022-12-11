import { IsRequiredString } from '../../../domain/decorators/validators/isRequiredString.decorator';

export class AuthDTO {
  @IsRequiredString()
  public email: string;

  @IsRequiredString()
  public password: string;

  constructor(props: AuthDTO) {
    Object.assign(this, props);
  }
}
