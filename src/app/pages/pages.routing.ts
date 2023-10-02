import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FlowchartComponent } from './flowchart/flowchart.component';
import { canAuthActive } from '../guards/auth.guard';
import { SettingsComponent } from './settings/settings.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: PagesComponent,
    canActivate:[canAuthActive],
    children: [
      {
        path: '',
        component: DashboardComponent,
        data: { titulo: 'Dashboard' },
      },
      {
        path: 'flowchart',
        component: FlowchartComponent,
        data: { titulo: 'FlowChart' },
      },
      {
        path:'settings',
        component: SettingsComponent,
        data:{titulo:'settings'}
      },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
