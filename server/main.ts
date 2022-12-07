import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SetupContainer } from './infra/common/utils/setupContainer.utils';
import { SetupDocumentBuilder } from './infra/common/utils/setupDocumentBuilder.utils';
import { SetupGlobalFilters } from './infra/common/utils/setupGlobalFilters.utils';
import { SetupGlobalInterceptors } from './infra/common/utils/setupGlobalInterceptors.utils';
import { SetupGlobalPipes } from './infra/common/utils/setupGlobalPipes.utils';

async function main() {
  const app = await NestFactory.create(AppModule);

  const port = process.env.PORT || 3000;

  SetupGlobalFilters.for(app);
  SetupGlobalInterceptors.for(app);
  SetupGlobalPipes.for(app);
  SetupDocumentBuilder.for(app);
  SetupContainer.for(app, AppModule);

  await app.listen(port);
}

main();
