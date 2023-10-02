export interface RegisterForm {
    name: string;
    email: string;
    password: string;
    password2: string;
    terminos: boolean;
}
export interface ResponseRegister{
    ok:boolean;
    token:string;
}