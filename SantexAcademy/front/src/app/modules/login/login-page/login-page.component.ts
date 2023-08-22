import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/authService';
import { TokenService } from 'src/app/core/services/token.service';
import { LoginUser } from 'src/app/models/login-user';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  isLogged = false;
  isLogginFail = false;
  loginUser! : LoginUser;
  email!: string;
  password!: string;
  roles: string[] = [];
  errMsj!: string;

  constructor(private tokenService: TokenService, private authService: AuthService , private router:Router){};

  ngOnInit(): void {
      if(this.tokenService.getToken()){
      this.isLogged = true;
      this.isLogginFail = false;
      this.roles = this.tokenService.getAuthorities();
    }

  }

  onLogin(): void {
      this.loginUser = new LoginUser(this.email, this.password); 
      this.authService.login(this.loginUser).subscribe(data => {
                 this.isLogged = true; 
                 this.isLogginFail = false; 
                 this.tokenService.setToken(data.token); 
                 this.tokenService.setEmail(data.email);
                 this.tokenService.setAuthorities(data.authorities);
                 this.roles = data.authorities;
                 this.router.navigate(['home'])
                }, err =>{
                  this.isLogged = false;
                  this.isLogginFail = true;
                  this.errMsj = err.error.mensaje;
                  console.log(this.errMsj);
                });
   
  }

  register() {
    this.router.navigate(['login/register']);
  }




}
