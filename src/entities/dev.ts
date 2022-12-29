import {Entity, Column, PrimaryGeneratedColumn, ManyToMany, OneToMany, JoinColumn, JoinTable, ChildEntity} from 'typeorm'
import { Application } from './application';
import { Skill } from './skill';
import { User } from './user';


@ChildEntity('dev')
export class Dev extends User{
    @Column({length: 60})
    title: string;

    @Column({length: 15})
    level: string;

    @ManyToMany(() => Skill)
    @JoinTable()
    skills: Skill[]

    @OneToMany(() => Application, applications => applications.dev)
    applications: Application[];
}