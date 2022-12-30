export interface IRecruiterRequest {
    name: string;
    email: string;
    password: string;
    social: string;
    avatarUrl: string;
    role: string;    
    company?: string;
}

export interface IRecruiter {
    id: string;
    name: string;
    email: string;
    password: string;
    social: string;
    avatarUrl: string;
    role: string;
    company?: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface IRecruiterUpdate{
    name?: string;
    email?: string;
    password?: string;
    social?: string;
    avatarUrl?: string;
    company?: string;
}