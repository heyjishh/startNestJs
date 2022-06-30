import { NestFactory } from '@nestjs/core';
import { NextFunction, Response, Request } from 'express';
import { RootModule } from './root.module';

function globalMiddleware(req: Request, res: Response, next: NextFunction) {
  console.log('This is a global Middleware Number 1');
  next();
}

async function bootstrap() {
  const app = await NestFactory.create(RootModule);
  app.use(globalMiddleware);
  await app.listen(3000);
}
bootstrap();
