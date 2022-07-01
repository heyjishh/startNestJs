import { Controller, Get, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {
  constructor() { }

  @Get()
  @UseGuards(AuthGuard('local'))
  findAll(@Request() req) {
    return req.user //this will provide the user object with full details of the user
  }

}
