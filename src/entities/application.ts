import {PrimaryGeneratedColumn, Column, CreateDateColumn, Entity, ManyToOne} from 'typeorm'
import { Dev } from './dev';
import { Job } from './job';


@Entity('application')
export class Application{
    @PrimaryGeneratedColumn('uuid')
    readonly id: string;

    @CreateDateColumn()
    receivedIn: Date;

    @Column({default: false})
    seen: boolean

    @ManyToOne(() => Dev)
    dev: Dev;

    @ManyToOne(() => Job)
    job: Job;
}
