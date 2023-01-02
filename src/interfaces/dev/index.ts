import { Skill } from "../../entities/skill";
import { ISkill } from "../skill";


export interface IDevRequest {
    name: string;
    lastName: string;
    email: string;
    password: string;
    social: string;
    avatarUrl: string;
    role: string;    
    title: string;
    level: string;
    skills: string[];
}

export interface IDev {
    id: string;
    name: string;
    lastName: string;
    email: string;
    password: string;
    social: string;
    avatarUrl: string;
    role: string;
    title: string;
    level: string;
    skills: ISkill[];
    createdAt: Date;
    updatedAt: Date;
}

export interface IDevUpdate {
    name?: string;
    lastName?: string;
    password?: string;
    social?: string;
    avatarUrl?: string;
    title?: string;
    level?: string;
    skills?: string[];
}
