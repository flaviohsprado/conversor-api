import { HttpStatus } from '@nestjs/common';
import { User } from '../../domain/entities/user.entity';
import { IBcryptService } from '../../domain/interfaces/bcrypt.interface';
import { IExceptionService } from '../../domain/interfaces/exceptions.interface';
import { ILogger } from '../../domain/logger/logger.interface';
import { IUserRepository } from '../../domain/repositories/user.repository';
import { CreateUserDTO } from './../../infra/controllers/user/user.dto';

export class CreateUserUseCase {
  constructor(
    private readonly logger: ILogger,
    private readonly repository: IUserRepository,
    private readonly bcryptService: IBcryptService,
    private readonly exceptionService: IExceptionService,
  ) {}

  public async execute(user: CreateUserDTO): Promise<User> {
    if (await this.repository.alreadyExists('email', user.email))
      this.exceptionService.throwForbiddenException({
        message: 'Email already exists in app!',
        statusCode: HttpStatus.FORBIDDEN,
      });

    user.password = await this.bcryptService.createHash(user.password);

    const createdUser = await this.repository.create(user);

    this.logger.log(
      'CreateUserUseCases execute()',
      'New user have been inserted',
    );

    return createdUser;
  }
}
