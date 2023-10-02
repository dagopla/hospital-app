import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/usuario.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit{

  perfilForm!:FormGroup;
  user!:User;
  constructor(private userService:UserService,
    private fb:FormBuilder) { }
  ngOnInit(): void {
    this.user=this.userService.user
    this.perfilForm=this.fb.group({
      name:[this.user.name, Validators.required],
      email:[this.user.email,[Validators.required,Validators.email]],
    })
  }
  updateUser(){
    console.log(this.perfilForm.value);
    this.userService.updateUser(this.perfilForm.value).subscribe((res:any)=>{
      console.log(res);
      
      this.user.name=res.user.dataValues.name;
      this.user.email=res.user.dataValues.email;
      
    }
    )
  }
}
