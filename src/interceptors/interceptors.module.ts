import { Module } from '@nestjs/common';
import { InterceptorsService } from './interceptors.service';
import { InterceptorsController } from './interceptors.controller';

@Module({
  controllers: [InterceptorsController],
  providers: [InterceptorsService]
})
export class InterceptorsModule {}
