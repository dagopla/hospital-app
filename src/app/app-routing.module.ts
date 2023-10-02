import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { PagesRoutingModule } from './pages/pages.routing';
import { AuthModule } from './auth/auth.module';
import { AuthRoutingModule } from './auth/auth.routing';

const routes: Routes = [
  {path:'',redirectTo:'dashboard', pathMatch:'full'},
  {path:'login',loadChildren:()=>import('./auth/auth.module').then(m=>m.AuthModule)},
  {path: '**', component:NopagefoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    PagesRoutingModule,
    AuthRoutingModule
  
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
