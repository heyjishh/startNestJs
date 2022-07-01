import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Request } from 'express';

// we can use guars on both level of the controller and the method

@Injectable()
export class PostGuard implements CanActivate {
  public username: string = "jishananwar";
  public password: string = "123456";

  // we will use Jwt Token later But now for learning purpose we will use this guard
  canActivate(
    context: ExecutionContext,
  ): boolean {
    let cxt = context.switchToHttp();
    const request = cxt.getRequest<Request>();

    if (request.header('username') == undefined || request.header('password') == undefined) return false
    return request.header('username') == this.username && request.header('password') == this.password;
  }
}
