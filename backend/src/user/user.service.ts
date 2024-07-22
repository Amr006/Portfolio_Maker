import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './models/user.entity';
import { Repository } from 'typeorm';
import { userDto } from './models/user.dto';
import { Observable, from } from 'rxjs';

@Injectable()
export class UserService {
    constructor( 
    @InjectRepository(UserEntity) private readonly userRepository: Repository<UserEntity>
    )    {}

    createUser(user: userDto): Observable<UserEntity>{
        return from(this.userRepository.save(user));
    }
    listUsers(): Observable<UserEntity[]>{
        return from(this.userRepository.find());
    }
}
