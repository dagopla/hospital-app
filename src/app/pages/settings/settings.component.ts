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
  fileUpload!: File ;
  perfilForm!:FormGroup;
  user!:User;
  constructor(private userService:UserService,
    private fb:FormBuilder) { }
  ngOnInit(): void {
    this.user=this.userService.user
    this.perfilForm=this.fb.group({
      name:[this.user.name, Validators.required],
      email:[this.user.email,[Validators.required,Validators.email]],
      file: [null],
    })
  }
  updateUser(){
    console.log(this.perfilForm.value);
    this.userService.updateUser(this.perfilForm.value).subscribe((res:any)=>{
      console.log(res);
      
      this.user.name=res.user.dataValues.name;
      this.user.email=res.user.dataValues.email;
      if(!this.perfilForm.value.file)return
      this.loadVideoToPresenter();
    }
    )
  }
  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      this.fileUpload = file;
    }
  }
  validFormFields(field:string){
    return this.perfilForm.controls[field].errors &&
      this.perfilForm.controls[field].touched
  }
  loadVideoToPresenter() {
    console.log(this.fileUpload);
    
    const formData = new FormData();
    
    // Agregar la imagen al objeto FormData
    formData.append('image', this.fileUpload, this.fileUpload.name);

    // if (this.fileUpload?.type !== 'jpg/png') {
    //   this.perfilForm.get('file')?.setErrors({ invalidVideo: true });
    //   return;
    // }
    this.perfilForm.get('file')?.setErrors(null);
    this.userService.updateFile(formData).subscribe((resp:any)=>{
      console.log(resp.nombreArchivo);
      this.user.img=resp.nombreArchivo;
    });
  }
}
