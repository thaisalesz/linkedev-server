import {Entity, Column, PrimaryGeneratedColumn, OneToMany} from 'typeorm'
import { Job } from './job';
import { User } from './user';

@Entity('recruiter')
export class Recruiter extends User{
    @PrimaryGeneratedColumn('uuid')
    readonly id: string;

    @Column({length: 30, nullable: true})
    company: string;

    @OneToMany(() => Job, jobs => jobs.recruiter)
    jobs: Job[]
}
