import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/core/services/token.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  
  constructor(private tokenService: TokenService, private router: Router){
  }
  isAdmin : boolean = false;

  ngOnInit(): void {
    if (this.tokenService.getAuthorities() == 'Admin'){
      this.isAdmin = true;
    }
  };
  
  logout():void {
    this.tokenService.logOut();
    this.router.navigate(['/login']);
  }
  
  navigateEncuesta():void {
    this.router.navigate(['/encuesta']);
  }
  

}
