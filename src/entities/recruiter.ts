import {Entity, Column, PrimaryGeneratedColumn, OneToMany, ChildEntity} from 'typeorm'
import { Job } from './job';
import { User } from './user';

@ChildEntity('recruiter')
export class Recruiter extends User{
    @Column({length: 30, nullable: true})
    company: string;

    @OneToMany(() => Job, jobs => jobs.recruiter)
    jobs: Job[]
}
