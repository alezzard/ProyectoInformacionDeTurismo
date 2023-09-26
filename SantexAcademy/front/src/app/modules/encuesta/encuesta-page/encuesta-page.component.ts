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
import { Question } from 'src/app/models/questions';
import { SQuestionService } from 'src/app/core/services/s-question.service';

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

  constructor(private tokenService: TokenService, private router: Router, private sQuestion: SQuestionService){};
  
  showE: boolean = false;
  isAdmin: boolean = false;

  questionsList!: Question[];
  optionsAnswerList: string[][] = [];
  
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

    this.sQuestion.lista().subscribe(data => {
      this.questionsList = data;
      alert("Se cargaron las preguntas")
    }, err => {
      alert("No se pudo cargar preguntas")
    });

  };

}
