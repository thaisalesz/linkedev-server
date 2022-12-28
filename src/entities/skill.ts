import {Entity, PrimaryGeneratedColumn, Column, ManyToMany} from 'typeorm'


@Entity('skill')
export class Skill{
    @PrimaryGeneratedColumn('uuid')
    readonly id: string;

    @Column({unique: true})
    name: string;

}