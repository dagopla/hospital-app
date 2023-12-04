import { Component, ElementRef, Host, HostListener, OnInit, ViewChild } from '@angular/core';
import { User } from 'src/app/models/usuario.model';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
  @ViewChild('profile',{static:true}) profile!:ElementRef;
  user!:User;
  @HostListener('document:click',['$event'])
  clickOut(event:any){
    if(!this.profile.nativeElement.contains(event.target)){
      this.expandProfile=false;
    }
  }
  constructor(private userService:UserService,private router:Router) { }
  ngOnInit(): void {
    this.user=this.userService.user
  }
  expandProfile:boolean=false;
  logout(){
    this.userService.logout();
    this.router.navigateByUrl('/auth/login');
  }
}
