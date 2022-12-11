import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { EnvironmentConfigModule } from '../../config/environment-config/environment-config.module';
import { EnvironmentConfigService } from '../../config/environment-config/environment-config.service';
import { ApiConfigService } from './api.service';

export const getAPIModuleOptions = async (
  config: EnvironmentConfigService,
): Promise<any> => ({
  config: {
    accessKey: config.getAccessKey(),
  },
});

@Module({
  imports: [
    HttpModule.registerAsync({
      imports: [EnvironmentConfigModule],
      inject: [EnvironmentConfigService],
      useFactory: getAPIModuleOptions,
    }),
  ],
  providers: [ApiConfigService, EnvironmentConfigService],
  exports: [ApiConfigService],
})
export class ApiConfigModule {}
