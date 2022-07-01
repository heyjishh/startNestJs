import { Controller, Get, Param, Post, UseInterceptors } from '@nestjs/common';

import { InterceptorInterceptor } from './interceptor.interceptor';
import { InterceptorsService } from './interceptors.service';

@Controller('interceptors')
export class InterceptorsController {
  constructor(private readonly interceptorsService: InterceptorsService) { }

  @Post()
  @UseInterceptors(InterceptorInterceptor)
  create(): any {
    // return res.json(req.body)
    return "This is the response";
  }

  @Get()
  findAll() {
    return this.interceptorsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.interceptorsService.findOne(+id);
  }

}
