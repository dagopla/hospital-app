import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { FlowchartComponent } from './flowchart/flowchart.component';
import { PrimengModule } from '../primeng.module';
import { SharedModule } from '../shared/shared.module';
import { NgxGraphModule } from '@swimlane/ngx-graph';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SettingsComponent } from './settings/settings.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    PagesComponent,
    DashboardComponent,
    FlowchartComponent,
    SettingsComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    PrimengModule,
    SharedModule,
    NgxGraphModule,
    
  ]
})
export class PagesModule { }
