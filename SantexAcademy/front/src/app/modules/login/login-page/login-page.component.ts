import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginUser } from 'src/app/models/login-user';
import { AuthService } from 'src/app/core/services/authService';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  isLogged = false;
  isLogginFail = false;
  loginUser! : LoginUser;
  userName!: string;
  password!: string;
  roles: string[] = [];
  errMsj!: string;

  constructor(private authService: AuthService, private router:Router){};

  ngOnInit(): void {

  }

    onLogin(): void {
      this.loginUser = new LoginUser(this.userName, this.password); 
      this.authService.login(this.loginUser).subscribe(data => {
                 this.isLogged = true; 
                 this.isLogginFail = false; 
                 //this.tokenService.setToken(data.token); 
                 //this.tokenService.setUserName(data.nombreUsuario);
                 //this.tokenService.setAuthorities(data.authorities);
                 //this.roles = data.authorities;
                 this.router.navigate(['encuesta'])
                }, err =>{
                  this.isLogged = false;
                  this.isLogginFail = true;
                  this.errMsj = err.error.mensaje;
                  console.log(this.errMsj);
                });
  
  }

}
