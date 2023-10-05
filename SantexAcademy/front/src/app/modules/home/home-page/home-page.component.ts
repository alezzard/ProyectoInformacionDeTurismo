import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/core/services/token.service';
import { UserService } from 'src/app/core/services/user.service';
import { Users } from 'src/app/models/users';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  
  constructor(private tokenService: TokenService, private router: Router, private  userService: UserService){
  }
  isAdmin : boolean = false;
  user: Users  = new Users("", "", "", "");

  ngOnInit(): void {
    if (this.tokenService.getAuthorities() == 'Admin'){
      this.isAdmin = true;
    }

    this.userService.detail(1).subscribe(data => {this.user = data});
  };
  
  logout():void {
    this.tokenService.logOut();
    this.router.navigate(['/login']);
  }

  

}
