import { IsEmail, IsNumber, IsString } from "class-validator";

export class userDto { 

    @IsString()
    name: string ;

    @IsEmail()
    email: string ;

    @IsNumber()
    age: number ;

    @IsString()
    description: string ;

    @IsString()
    jobTitle: string ;
}