export interface TokenPayload {
    sub:  string;
    id: number;
} 

export interface AuthData {
    user: AuthUser;
    token: string;
}
interface AuthUser {
    id: string;
    first_name: string;
}

export interface UserCredenctials {
    id: number;
    password: string;
}