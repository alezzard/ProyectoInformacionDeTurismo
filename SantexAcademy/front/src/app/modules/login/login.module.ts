import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRoutingModule } from './login-routing.module';
import { LoginPageComponent } from './login-page/login-page.component';
import { FormsModule } from '@angular/forms';
import { LoginUser } from 'src/app/models/login-user';
import { Users } from 'src/app/models/users';

@NgModule({
  declarations: [
    LoginPageComponent
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
