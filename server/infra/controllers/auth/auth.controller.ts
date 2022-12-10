import { Body, Controller, Inject } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { LoginUseCase } from '../../../domain/use-cases/auth/login.usecase';
import { Public } from '../../../main/decorators/isPublicRoute.decorator';
import { PostApiResponse } from '../../../main/decorators/requests/postApiResponse.decorator';
import { AuthUsecasesProxyModule } from '../../usecases-proxy/auth/auth-usecases-proxy.module';
import { UseCaseProxy } from '../../usecases-proxy/usecase-proxy';
import { AuthDTO } from './auth.dto';
import { AuthPresenter } from './auth.presenter';

@ApiResponse({
  status: 401,
  description: 'No authorization token was found',
})
@ApiTags('Authentication')
@Controller('public/auth')
export class AuthController {
  constructor(
    @Inject(AuthUsecasesProxyModule.LOGIN_USECASES_PROXY)
    private readonly loginUseCase: UseCaseProxy<LoginUseCase>,
  ) {}

  @Public()
  @PostApiResponse(AuthPresenter, '/login', false)
  async login(@Body() authCredentials: AuthDTO) {
    const credentials = new AuthDTO(authCredentials);
    return this.loginUseCase.getInstance().execute(credentials);
  }
}
