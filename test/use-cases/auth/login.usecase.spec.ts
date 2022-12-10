import { JWTConfig } from '../../../server/domain/config/jwt.interface';
import { User } from '../../../server/domain/entities/user.entity';
import { IBcryptService } from '../../../server/domain/interfaces/bcrypt.interface';
import { IExceptionService } from '../../../server/domain/interfaces/exceptions.interface';
import { IJwtService } from '../../../server/domain/interfaces/jwt.interface';
import { ILogger } from '../../../server/domain/logger/logger.interface';
import { IUserRepository } from '../../../server/domain/repositories/user.repository';
import { LoginUseCase } from '../../../server/domain/use-cases/auth/login.usecase';

describe('uses-cases/auth', () => {
  let loginUseCases: LoginUseCase;
  let logger: ILogger;
  let exception: IExceptionService;
  let jwtService: IJwtService;
  let jwtConfig: JWTConfig;
  let userRepository: IUserRepository;
  let bcryptService: IBcryptService;

  beforeEach(() => {
    logger = {} as ILogger;
    logger.log = jest.fn();

    exception = {} as IExceptionService;
    exception.throwNotFoundException = jest.fn();

    jwtService = {} as IJwtService;
    jwtService.createToken = jest.fn();

    jwtConfig = {} as JWTConfig;
    jwtConfig.getJwtExpirationTime = jest.fn();
    jwtConfig.getJwtSecret = jest.fn();

    userRepository = {} as IUserRepository;
    userRepository.findByKey = jest.fn();
    userRepository.update = jest.fn();

    bcryptService = {} as IBcryptService;
    bcryptService.checkHash = jest.fn();
    bcryptService.createHash = jest.fn();

    loginUseCases = new LoginUseCase(
      logger,
      jwtService,
      bcryptService,
      exception,
      userRepository,
    );
  });

  describe('login', () => {
    it('should return an access token object', async () => {
      const user: User = {
        id: 'abc',
        username: 'username',
        password: 'password',
        email: 'email',
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      (userRepository.findByKey as jest.Mock).mockReturnValue(
        Promise.resolve(user),
      );
      (bcryptService.checkHash as jest.Mock).mockReturnValue(
        Promise.resolve(true),
      );
      (jwtService.createToken as jest.Mock).mockReturnValue(
        Promise.resolve({ id: 'abc', username: 'username' }),
      );

      jest.spyOn(loginUseCases, 'execute').mockImplementation();

      expect(
        await loginUseCases.execute({
          email: 'email',
          password: 'password',
        }),
      ).toBe(undefined);
    });
  });
});
