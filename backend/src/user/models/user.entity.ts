import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('user')
export class UserEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    email:string;

    @Column()
    password:string;
    
    @Column()
    age: number;

    @Column()
    description: string;

    @Column()
    jobTitle: string;
}