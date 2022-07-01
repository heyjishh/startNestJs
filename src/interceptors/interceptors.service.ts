import { Injectable, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';

@Injectable()
export class InterceptorsService {
  create(@Req() req: Request, @Res() res: Response): any {
    return res.json(req.body)
  }

  findAll() {
    return `This action returns all interceptors`;
  }

  findOne(id: number) {
    return `This action returns a #${id} interceptor`;
  }

}
