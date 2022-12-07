import { HttpStatus } from '@nestjs/common';
import { IExceptionService } from 'src/domain/interfaces/exceptions.interface';
import { CreateUserDTO } from './../../../infra/controllers/user/user.dto';
import { User } from './../../entities/user.entity';
import { IBcryptService } from './../../interfaces/bcrypt.interface';
import { ILogger } from './../../logger/logger.interface';
import { IUserRepository } from './../../repositories/user.repository';

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
