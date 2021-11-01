import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddRoleComponent } from './components/add-role/add-role.component';
import { AddUserbyroleComponent } from './components/add-userbyrole/add-userbyrole.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ViewRoleComponent } from './components/view-role/view-role.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  },
  {
    path: 'add-role',
    component: AddRoleComponent,
  },
  {
    path: 'add-userbyrole',
    component: AddUserbyroleComponent,

  },
  {
    path: 'viewrole',
    component: ViewRoleComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
