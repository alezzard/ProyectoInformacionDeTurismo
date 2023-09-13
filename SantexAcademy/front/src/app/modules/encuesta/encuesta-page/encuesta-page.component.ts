import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormBuilder, FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule} from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule}  from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { TokenService } from 'src/app/core/services/token.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-encuesta-page',
  templateUrl: './encuesta-page.component.html',
  styleUrls: ['./encuesta-page.component.css'],
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    MatToolbarModule, 
    MatButtonModule, 
    MatIconModule,
    MatMenuModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    MatCheckboxModule
  ],
})
export class EncuestaPageComponent {

  constructor(private tokenService: TokenService, private router: Router){};
  
  showE: boolean = false;
  isAdmin: boolean = false;
  
  logout():void {
    this.tokenService.logOut();
    this.router.navigate(['/login']);
  }

  backHome():void {
    this.router.navigate(['/home']);
  }

  newEncuesta():void {
    this.showE = true;
  };

  saveEncuesta():void {
    this.showE = false;
  };

  newQuestion():void {
    this.router.navigate(['/encuesta/newQuestion'])
  }

  ngOnInit(): void {
    if (this.tokenService.getAuthorities() == 'Admin'){
      this.isAdmin = true;
    }
  };

}
