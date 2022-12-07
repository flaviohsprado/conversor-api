import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

export class SetupDocumentBuilder {
  static for(app: INestApplication) {
    const config = new DocumentBuilder()
      .setTitle('Converter API - recruiting test')
      .setDescription(
        'This is a sample of API capable of converting between two currencies using enhanced security fees from an external service. This API is part of a recruitment test for a job position. Contained modules: User, Auth and Transaction.',
      )
      .setVersion('1.0')
      .addTag('User')
      .addTag('Authentication')
      .addTag('Transaction')
      .addBearerAuth()
      .addBasicAuth()
      .build();

    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api', app, document);
  }
}
