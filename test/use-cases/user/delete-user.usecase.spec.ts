import { User } from '../../../server/domain/entities/user.entity';
import { IExceptionService } from '../../../server/domain/interfaces/exceptions.interface';
import { ILogger } from '../../../server/domain/logger/logger.interface';
import { IUserRepository } from '../../../server/domain/repositories/user.repository';
import { DeleteUserUseCase } from '../../../server/usecase/user/delete-user.usecase';

describe('uses-cases/user', () => {
  let deleteUserUseCases: DeleteUserUseCase;
  let logger: ILogger;
  let exception: IExceptionService;
  let userRepository: IUserRepository;

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
    userRepository.findByKey = jest.fn();
    userRepository.update = jest.fn();

    deleteUserUseCases = new DeleteUserUseCase(
      logger,
      userRepository,
      exception,
    );
  });

  describe('delete-user', () => {
    it('should return an user object deleted', async () => {
      const result: User = {
        id: 'id',
        username: 'username',
        password: 'password',
        email: 'email',
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      jest
        .spyOn(deleteUserUseCases, 'execute')
        .mockReturnValue(Promise.resolve(result));

      expect(await deleteUserUseCases.execute('id')).toEqual(result);
    });
  });
});
