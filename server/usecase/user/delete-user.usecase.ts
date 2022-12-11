import { HttpStatus } from '@nestjs/common';
import { User } from '../../domain/entities/user.entity';
import { IExceptionService } from '../../domain/interfaces/exceptions.interface';
import { ILogger } from '../../domain/logger/logger.interface';
import { IUserRepository } from '../../domain/repositories/user.repository';

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
