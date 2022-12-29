export interface IUserRequest {
    name: string;
    email: string;
    password: string;
    social: string;
    avatarUrl: string;
    role: string;
    company?: string;
    title?: string;
    level?: string;
}

export interface ILoginRequest {
    email: string;
    password: string
}