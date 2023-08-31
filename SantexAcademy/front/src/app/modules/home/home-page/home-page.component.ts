import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/core/services/token.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {

  constructor(private tokenService: TokenService, private router: Router){};

  logout():void {
    this.tokenService.logOut();
    this.router.navigate(['/login']);
  }

}
