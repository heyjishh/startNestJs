import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Request } from 'express';



@Injectable()
export class PostGuard implements CanActivate {
  public username: string = "jishananwar";
  public password: string = "123456";
  canActivate(
    context: ExecutionContext,
  ): boolean {
    let cxt = context.switchToHttp();
    const request = cxt.getRequest<Request>();

    if (request.header('username') == undefined || request.header('password') == undefined) return false
    return request.header('username') == this.username && request.header('password') == this.password;
  }
}
