import { User } from '../../../server/domain/entities/user.entity';
import { IBcryptService } from '../../../server/domain/interfaces/bcrypt.interface';
import { IExceptionService } from '../../../server/domain/interfaces/exceptions.interface';
import { ILogger } from '../../../server/domain/logger/logger.interface';
import { IUserRepository } from '../../../server/domain/repositories/user.repository';
import { CreateUserUseCase } from '../../../server/domain/use-cases/user/create-user.usecase';

describe('uses-cases/user', () => {
  let createUserUseCases: CreateUserUseCase;
  let logger: ILogger;
  let exception: IExceptionService;
  let userRepository: IUserRepository;
  let bcryptService: IBcryptService;

  beforeEach(() => {
    logger = {} as ILogger;
    logger.log = jest.fn();

    exception = {} as IExceptionService;
    exception.throwBadRequestException = jest.fn();
    exception.throwForbiddenException = jest.fn();
    exception.throwInternalServerErrorException = jest.fn();
    exception.throwNotFoundException = jest.fn();
    exception.throwUnauthorizedException = jest.fn();

    userRepository = {} as IUserRepository;
    userRepository.create = jest.fn();
    userRepository.findOne = jest.fn();

    bcryptService = {} as IBcryptService;
    bcryptService.checkHash = jest.fn();
    bcryptService.createHash = jest.fn();

    createUserUseCases = new CreateUserUseCase(
      logger,
      userRepository,
      bcryptService,
      exception,
    );
  });

  describe('create-user', () => {
    it('should return an user object', async () => {
      const result: User = {
        id: 'id',
        username: 'username',
        password: 'password',
        email: 'email',
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      jest
        .spyOn(createUserUseCases, 'execute')
        .mockReturnValue(Promise.resolve(result));

      expect(
        await createUserUseCases.execute({
          username: 'username',
          email: 'email',
          password: 'password',
        }),
      ).toEqual(result);
    });
  });
});
