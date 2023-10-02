import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, MaxLengthValidator, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { RegisterForm } from '../interfaces/register-form.interface';
import { ValidFormService } from 'src/app/services/valid-form.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'
  ]
})
export class RegisterComponent implements OnInit {

  public formSubmited=false;
  public registerForm:FormGroup= this.fb.group({
    name:['David', Validators.required],
    email:['dagopla@gmail.com',[Validators.required,Validators.email]],
    password:['1234',[Validators.required, Validators.minLength(6)]],
    password2:['1234',Validators.required],
    terminos:[false,Validators.requiredTrue]

  },
  {
    validators:this.validAdmin.isFieldOneEqualFieldTwo('password','password2')
  })
  constructor(private fb:FormBuilder,
     private userService:UserService,
     private route:Router,
     private validAdmin:ValidFormService) { }

  ngOnInit(): void {
  }

  createUser(){
    this.formSubmited=true;
    if(this.registerForm.invalid){
      return;
    }
    const {password2,...body}=this.registerForm.value;
    this.userService.createUser(body as RegisterForm).subscribe(
      resp=>{
        console.log(resp);
        if(resp.ok===true){
          this.route.navigateByUrl('/')
        }
      },
      err=>{
        console.log(err);
      }
    );
  }
  validField(field:string){
    return this.registerForm.controls[field].errors &&
      this.registerForm.controls[field].touched
  }
  termsAcepted(){
    return !this.registerForm.get('terminos')?.value && this.formSubmited;
  }
  passwordValid(){
  return this.registerForm.get('password')?.value !== this.registerForm.get('password2')?.value && this.formSubmited;
  }
  getFieldError( field: string ){
    return this.validAdmin.getFieldError(this.registerForm, field);
  }
  

}
