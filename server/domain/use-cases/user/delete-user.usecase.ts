import { HttpStatus } from '@nestjs/common';
import { User } from '../../../domain/entities/user.entity';
import { IExceptionService } from '../../../domain/interfaces/exceptions.interface';
import { IUserRepository } from '../../repositories/user.repository';
import { ILogger } from './../../logger/logger.interface';

export class DeleteUserUseCase {
  constructor(
    private readonly logger: ILogger,
    private readonly repository: IUserRepository,
    private readonly exceptionService: IExceptionService,
  ) {}

  public async execute(id: string): Promise<User> {
    const userDeleted = await this.repository.delete(id);

    if (userDeleted) {
      this.logger.log(
        'DeleteUserUseCases execute()',
        `User ${id} have been deleted`,
      );

      return userDeleted;
    } else {
      this.exceptionService.throwNotFoundException({
        message: 'User not found!',
        statusCode: HttpStatus.NOT_FOUND,
      });
    }
  }
}
