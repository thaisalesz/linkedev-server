import {Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToMany, JoinTable, ManyToOne, OneToMany} from 'typeorm'
import { Application } from './application';
import { Recruiter } from './recruiter';
import { Skill } from './skill';


@Entity('job')
export class Job {
    @PrimaryGeneratedColumn('uuid')
    readonly id: string;

    @Column({length: 60})
    title: string;

    @Column({length:250})
    description: string;

    @Column({length: 15})
    level: string;

    @Column({length: 10, nullable: true})
    salary: string;

    @Column({length: 30, nullable: true})
    company: string;

    @Column({length: 40, nullable: true})
    location: string;

    @Column()
    remote: boolean;

    @Column({type: 'boolean', default: true})
    isActive: boolean;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @ManyToMany(() => Skill)
    @JoinTable()
    skills: Skill[];

    @ManyToOne(() => Recruiter, {eager: true})
    recruiter: Recruiter;

    @OneToMany(() => Application, applications => applications.job)
    applications: Application[]
}
