import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddRoleComponent } from './admin/components/add-role/add-role.component';
import { AddUserbyroleComponent } from './admin/components/add-userbyrole/add-userbyrole.component';
import { DashboardComponent } from './admin/components/dashboard/dashboard.component';
import { ViewRoleComponent } from './admin/components/view-role/view-role.component';
const routes: Routes = [
  {
    path: 'user',
    loadChildren: () => import('./user/user.module').then
    (m=> m.UserModule)
  }, {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
  },

  {
    path: '',
    component: DashboardComponent,
  },
  {
    path: 'viewrole',
    component: ViewRoleComponent
  },
  { path: 'add-userbyrole', component: AddUserbyroleComponent },
  { path: 'add-role', component: AddRoleComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
