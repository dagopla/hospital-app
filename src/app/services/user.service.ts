import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RegisterForm, ResponseRegister } from '../auth/interfaces/register-form.interface';
import { LoginForm } from '../auth/interfaces/login-form.interface';
import { catchError, map, of, tap } from 'rxjs';
import { Router } from '@angular/router';
import { User } from 'src/app/models/usuario.model';
import { environment } from 'src/environments/environment.dev';

const baseUrl=environment.baseUrl;

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _user!: User;
  public get user(): User {
    return this._user;
  }
  public set user(value: User) {
    this._user = value;
  }

  constructor(private http:HttpClient,
    private router:Router
    ) { }
  get token():string{
    return localStorage.getItem('token') || '';
  }
  get headers(){
    return {
      headers:{
        'x-token':this.token
      }
    }
  }
  get uid():string{
    return this.user.id || '';
  }
  get role():string{
    return this.user.role || '';
  }
  createUser(data:RegisterForm){
    return this.http.post<ResponseRegister>(`${baseUrl}/users`,data)
    .pipe(
      tap(res=>localStorage.setItem('token',res.token))
    );
  }
  updateUser(data:Partial<User>){
    return this.http.put(`${baseUrl}/users/${this.uid}`,{role:this.role,...data},this.headers);
  }
  login(body:LoginForm){
    return this.http.post<any>(`${baseUrl}/auth`,body)
    .pipe(
      tap(resp=>{
        localStorage.setItem('token',resp.token);
      })
    );
  }
  loginGoogle(token:string){
    return this.http.post<any>(`${baseUrl}/auth/google`,{token})
    .pipe(
      tap(resp=>{
        localStorage.setItem('token',resp.token);
      })
    );
  }
  validateToken(){
    return this.http.get<any>(`${baseUrl}/auth/renew`,this.headers).pipe(
      map(resp=>{
        this.user= new User({...resp.user});
        localStorage.setItem('token',resp.token);
        return resp.ok}),
      catchError(error=>of(false))
    );
  }
  logout(){
    localStorage.removeItem('token');
    this.router.navigateByUrl('/login');
  }
}
