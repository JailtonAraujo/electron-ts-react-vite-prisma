export class User {
    id?: number;
    uid?: string;
    active: boolean = true;
    name?: string;
    email?: string;
    username?: string;
    password!: string;
}