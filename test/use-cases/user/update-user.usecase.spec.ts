import { User } from '../../../server/domain/entities/user.entity';
import { IBcryptService } from '../../../server/domain/interfaces/bcrypt.interface';
import { IExceptionService } from '../../../server/domain/interfaces/exceptions.interface';
import { ILogger } from '../../../server/domain/logger/logger.interface';
import { IUserRepository } from '../../../server/domain/repositories/user.repository';
import { UpdateUserDTO } from '../../../server/infra/controllers/user/user.dto';
import { UpdateUserUseCase } from '../../../server/usecase/user/update-user.usecase';

describe('uses-cases/user', () => {
  let updateUserUseCases: UpdateUserUseCase;
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
    userRepository.update = jest.fn();

    bcryptService = {} as IBcryptService;
    bcryptService.checkHash = jest.fn();
    bcryptService.createHash = jest.fn();

    updateUserUseCases = new UpdateUserUseCase(
      logger,
      userRepository,
      bcryptService,
      exception,
    );
  });

  describe('update-user', () => {
    it('should return an user object updated', async () => {
      const request: UpdateUserDTO = {
        email: 'email2',
        password: 'password',
        username: 'username',
      };
      const result: User = {
        id: 'id',
        username: 'username',
        password: 'password',
        email: 'email2',
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      jest
        .spyOn(updateUserUseCases, 'execute')
        .mockReturnValue(Promise.resolve(result));

      expect(await updateUserUseCases.execute('id', request)).toEqual(result);
    });
  });
});
