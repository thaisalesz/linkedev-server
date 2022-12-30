import {Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, TableInheritance} from "typeorm"
import {Exclude} from 'class-transformer'

@Entity('user')
@TableInheritance({column: {type: 'varchar', name: 'role'}})
export class User {
    @PrimaryGeneratedColumn('uuid')
    readonly id: string;

    @Column({length: 50})
    name: string;

    @Column({length: 50})
    lastName: string;

    @Column({length: 50, unique: true})
    email: string;

    @Column({length: 60})
    @Exclude()
    password: string;
    
    @Column({length: 30})
    social: string;

    @Column({length: 200})
    avatarUrl: string; 

    @Column({length: 15})
    role: string;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

}