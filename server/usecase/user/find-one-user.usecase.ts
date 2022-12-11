import { User } from '../../domain/entities/user.entity';
import { ICacheManager } from '../../domain/interfaces/cache.interface';
import { IExceptionService } from '../../domain/interfaces/exceptions.interface';
import { IUserRepository } from '../../domain/repositories/user.repository';

export class FindOneUserUseCase {
  constructor(
    private readonly repository: IUserRepository,
    private readonly exceptionService: IExceptionService,
    private readonly cacheManager: ICacheManager,
  ) {}

  public async execute(id: string): Promise<User> {
    const cachedUser = await this.cacheManager.getCachedObject<User>('user');

    if (cachedUser) return cachedUser;

    const user: User = await this.repository.findOne(id);

    if (!user)
      this.exceptionService.throwNotFoundException({
        message: 'User not found',
      });

    await this.cacheManager.setObjectInCache('user', user);

    return user;
  }
}
