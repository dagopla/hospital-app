import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
const base_url=environment.baseUrl;
@Injectable({
  providedIn: 'root'
})
export class FileUploadService {

  constructor() { }

  async actualizarFoto(archivo:File,id:string){ 
    try {
      const url=`${base_url}/upload/users/${id}`;
      const formData=new FormData();
      formData.append('file',archivo);
      const resp=await fetch(url,{
        method:'PUT',
        headers:{
          'x-token':localStorage.getItem('token') || ''
        },
        body:formData
      });
      const data=await resp.json();
      if(data.ok){
        return data.nombreArchivo;
      }else{
        console.log(data.msg);
        return false;
      }
    } catch (error) {
      console.log(error);
      return false;
    }
  }
}
