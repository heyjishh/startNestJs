import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { UserService } from 'src/user/user.service';

@Injectable()
export class PassPortLocalStrategy extends PassportStrategy(Strategy) {
    constructor(private readonly userService: UserService) {
        super();
    }

    validate(username: string, password: string): CreateUserDto {
        const user: CreateUserDto = this.userService.getUserByName(username)
        if (user == undefined) {
            throw new Error('User not found');
        }
        if (user && user.password === password) {
            return user;
        }
    }

}
