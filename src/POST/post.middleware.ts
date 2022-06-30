import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class PostMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const P = req.protocol;
    const host = req.hostname;
    const url = req.originalUrl;
    const t = req.ip;
    const date = new Date().toDateString();
    console.log(`${P}://${host}${url} ${date}     ${t}`);

    console.log('Request... 123 class based Middleware ');
    next();
  }
}
