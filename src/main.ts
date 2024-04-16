import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { HttpExceptionFilter } from './utils/http-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors();

  const port = process.env.PORT;
  app.useGlobalFilters(new HttpExceptionFilter());

  try {
    await app.listen(port);
    console.log(`Listening on http://localhost:${port} 🚀`);
  } catch (err) {
    console.error(`Failed to start server on port ${port}:`, err);
  }
}
bootstrap();
