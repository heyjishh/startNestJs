import { Module } from '@nestjs/common';
import { UserModule } from 'src/user/user.module';

import { AuthController } from './auth.controller';
import { PassPortLocalStrategy } from './passport.localStrategy';

@Module({
  imports: [UserModule],
  controllers: [AuthController],
  providers: [PassPortLocalStrategy]
})
export class AuthModule { }
