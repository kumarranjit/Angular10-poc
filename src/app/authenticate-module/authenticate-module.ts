import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticateModuleRoutingModule } from './authenticate-module-routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';


@NgModule({
  declarations: [LoginComponent, RegisterComponent],
  imports: [
    CommonModule,
    AuthenticateModuleRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class AuthenticateModule { }
