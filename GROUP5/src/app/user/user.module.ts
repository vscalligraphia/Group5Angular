import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import{HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { UserRoutingModule } from './user-routing.module';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { AuthService } from './services/auth.service';
import { ContactsusComponent } from './components/contactsus/contactsus.component';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    ContactsusComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    HttpClientModule,
    UserRoutingModule
  ],

  providers: [AuthService,
  ]
})
export class UserModule { }
