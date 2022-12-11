import { User } from '../../domain/entities/user.entity';
import { ICacheManager } from '../../domain/interfaces/cache.interface';
import { IExceptionService } from '../../domain/interfaces/exceptions.interface';
import { IUserRepository } from '../../domain/repositories/user.repository';

export class FindUserByKeyUseCase {
  constructor(
    private readonly repository: IUserRepository,
    private readonly exceptionService: IExceptionService,
    private readonly cacheManager: ICacheManager,
  ) {}

  public async execute(key: string, value: string): Promise<User> {
    const cachedUser = await this.cacheManager.getCachedObject<User>(
      'userById',
    );

    if (cachedUser) return cachedUser;

    const user: User = await this.repository.findByKey(key, value);

    if (!user)
      this.exceptionService.throwNotFoundException({
        message: 'User not found',
      });

    await this.cacheManager.setObjectInCache('userById', user);

    return user;
  }
}
