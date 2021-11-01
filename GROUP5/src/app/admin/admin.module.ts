import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AddUserbyroleComponent } from './components/add-userbyrole/add-userbyrole.component';
import { ViewRoleComponent } from './components/view-role/view-role.component';
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AddRoleComponent } from './components/add-role/add-role.component';


@NgModule({
  declarations: [
    DashboardComponent,
    AddUserbyroleComponent,
    ViewRoleComponent,
    AddRoleComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    HttpClientModule,
    FormsModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
