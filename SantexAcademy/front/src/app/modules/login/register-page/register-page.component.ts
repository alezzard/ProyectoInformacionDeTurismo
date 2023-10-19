import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/authService';
import { Users } from 'src/app/models/users';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent {

  firstName!: string;
  lastname!: string;
  email!: string;
  password!: string;
  role_id!: 2;
  users!: Users;
  errMsj!: string;

  constructor(private authService: AuthService, private router: Router){};

  registerUser():void {
    this.users = new Users(this.firstName, this.lastname, this.email, this.password);
    this.authService.new(this.users).subscribe(user => {
      user.firstName = this.users.firstName;
      user.lastName = this.users.lastName;
      user.email = this.users.email;
      user.password = this.users.password;
      user.role_id = this.role_id;
      this.router.navigate(['login'])
    }, err => {
      this.errMsj = err.error.mensaje;
      console.log(this.errMsj);
    });
          
  }
}
