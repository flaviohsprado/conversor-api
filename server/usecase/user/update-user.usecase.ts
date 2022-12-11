import { HttpStatus } from '@nestjs/common';
import { User } from '../../domain/entities/user.entity';
import { IBcryptService } from '../../domain/interfaces/bcrypt.interface';
import { IExceptionService } from '../../domain/interfaces/exceptions.interface';
import { ILogger } from '../../domain/logger/logger.interface';
import { IUserRepository } from '../../domain/repositories/user.repository';
import { UpdateUserDTO } from '../../infra/controllers/user/user.dto';

export class UpdateUserUseCase {
  constructor(
    private readonly logger: ILogger,
    private readonly repository: IUserRepository,
    private readonly bcryptService: IBcryptService,
    private readonly exceptionService: IExceptionService,
  ) {}

  public async execute(id: string, user: UpdateUserDTO): Promise<User> {
    if (await this.repository.alreadyExists('email', user.email, id))
      this.exceptionService.throwForbiddenException({
        message: 'Email already exists in app!',
        statusCode: HttpStatus.FORBIDDEN,
      });

    if (user.password)
      user.password = await this.bcryptService.createHash(user.password);

    const updatedUser = await this.repository.update(id, user);

    this.logger.log(
      'UpdateUserUseCases execute()',
      `User ${id} have been updated`,
    );

    return updatedUser;
  }
}
