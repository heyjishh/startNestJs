import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { Request } from 'express';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class InterceptorInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any> {
    const ctx = context.switchToHttp();
    const request = ctx.getRequest<Request>();
    request.body.name = "This is the body";
    console.log('Before...');
    console.log("This is a InterCeptor");
    return next
      .handle()
      // .pipe(
      //   tap(() => console.log(`After...`)))
      .pipe(map((data) => {
        console.log("This is the data");
        data = "This is the data From Interceptor";
        return data;
      }));
  }
}
