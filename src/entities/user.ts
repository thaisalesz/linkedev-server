import {Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn} from "typeorm"
import {Exclude} from 'class-transformer'

@Entity('user')
export class User {
    @PrimaryGeneratedColumn('uuid')
    readonly id: string;

    @Column({length: 50})
    name: string;

    @Column({length: 50, unique: true})
    email: string;

    @Column({length: 60})
    @Exclude()
    password: string;
    
    @Column({length: 30})
    social: string;

    @Column({length: 200})
    avatarUrl: string;

    @Column({length: 10})
    role: string;    

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

}