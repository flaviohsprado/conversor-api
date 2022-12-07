import { AuthDTO } from '../../../infra/controllers/auth/auth.dto';
import { AuthPresenter } from '../../../infra/controllers/auth/auth.presenter';
import { User } from '../../entities/user.entity';
import { IBcryptService } from '../../interfaces/bcrypt.interface';
import { IExceptionService } from '../../interfaces/exceptions.interface';
import { IJwtService } from '../../interfaces/jwt.interface';
import { ILogger } from '../../logger/logger.interface';
import { IUserRepository } from '../../repositories/user.repository';

export class LoginUseCase {
  constructor(
    private readonly logger: ILogger,
    private readonly jwtService: IJwtService,
    private readonly bcryptService: IBcryptService,
    private readonly exceptionService: IExceptionService,
    private readonly userRepository: IUserRepository,
  ) {}

  public async execute(credentials: AuthDTO): Promise<AuthPresenter> {
    const userValidated: Omit<User, 'password'> = await this.validateUser(
      credentials.email,
      credentials.password,
    );

    const accessToken = this.jwtService.createToken({
      id: userValidated.id,
      username: userValidated.username,
    });

    this.logger.log(`LoginUseCases execute()`, `User have been logged in!`);

    return new AuthPresenter({ accessToken });
  }

  private async validateUser(email: string, password: string) {
    const user = await this.userRepository.findByKey('email', email);

    if (!user)
      this.exceptionService.throwNotFoundException({
        message: 'User not found!',
      });

    if (await this.bcryptService.checkHash(password, user.password)) {
      delete user.password;

      return user;
    }
  }
}
