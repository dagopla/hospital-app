import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { LoginForm } from '../interfaces/login-form.interface';
declare const google:any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, AfterViewInit  {
  recoveryPassword:boolean=false;
  registered:boolean=false;
  @ViewChild('googleSingIn') loginForm:ElementRef | undefined;
  public formSubmited=false;
  public registerForm= this.fb.group({
    email:['',[Validators.required,Validators.email]],
    password:['',Validators.required],
    remember:[false]

  })
  constructor(private router:Router,
    private userService:UserService,
    private fb:FormBuilder) { }
  ngAfterViewInit(): void {
    this.googleInit();
  }

  ngOnInit(): void {
  }
  googleInit(){
    google.accounts.id.initialize({
      client_id: "1016823852469-fagfsnp5ou36m1amga26g835b9dds2ec.apps.googleusercontent.com",
      callback:(response:any)=> this.handleCredentialResponse(response)
    });
    console.log('crear btn google');
    
    google.accounts.id.renderButton(
      this.loginForm?.nativeElement,   // HTML element name
      { theme: "outline", size: "large" },
        // customization attributes
    );
  }
  handleCredentialResponse(response:any) {
    console.log(response.credential);
    this.userService.loginGoogle(response.credential).subscribe(
      resp=>{
        console.log(resp);
        this.router.navigateByUrl('/');
      }
    );
  }

  login(){
    this.registered=false;
    this.userService.login(this.registerForm.value as LoginForm ).subscribe(
      resp=>{
        console.log(resp);
        if(this.registerForm.get('remember')?.value){
          localStorage.setItem('email',this.registerForm.get('email')?.value || '');
        }else{
          localStorage.removeItem('email');
        }
        this.router.navigateByUrl('/');
      } ,
      err=>{
        this.registered=true;
      }
    );
    
  }
}
