import { Observable } from 'rxjs';
import { userDto } from './models/user.dto';
import { UserService } from './user.service';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserEntity } from './models/user.entity';

@Controller('user')
export class UserController {

    constructor(private readonly userService: UserService){}

    @Post()
    create(@Body() userData: userDto):Observable<UserEntity>{
        return this.userService.createUser(userData)
    }

    @Get()
    listAll():Observable<UserEntity[]>{
        return this.userService.listUsers();
    }
}
