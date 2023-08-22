import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRoutingModule } from './login-routing.module';
import { LoginPageComponent } from './login-page/login-page.component';
import { FormsModule } from '@angular/forms';
import { LoginUser } from 'src/app/models/login-user';
import { Users } from 'src/app/models/users';
import { RegisterPageComponent } from './register-page/register-page.component';

@NgModule({
  declarations: [
    LoginPageComponent,
    RegisterPageComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    FormsModule,
  ],
  exports: [
    LoginPageComponent
  ],
  providers: [],
})
export class LoginModule { }
