import { Component } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import {FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule} from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule}  from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxChange, MatCheckboxModule } from '@angular/material/checkbox';
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
    NgFor,
    ReactiveFormsModule,
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
  
  newSurvey!: FormGroup;
  showE: boolean = false;
  answerSelect!: String;
  prueba!: String;
  idQuestion!: number;

  questionsList!: Question[];
  optionsAnswerList: string[][] = [];

  constructor(private tokenService: TokenService, private router: Router, private sQuestion: SQuestionService, private readonly fb: FormBuilder){};
  
  logout():void {
    this.tokenService.logOut();
    this.router.navigate(['/login']);
  }

  createSurvey():void {
    
  };

  backHome():void {
    this.router.navigate(['/home']);
  }

  newEncuesta():void {
    this.showE = true;
  };

  saveEncuesta():void {
    this.showE = false;
  };

  selectAnswer(option: String, event: MatCheckboxChange):void {
    const isChecked = event.checked;
    const answer = isChecked ? 'valorElegido' : '';
    this.newSurvey.get('answerSelect_' + option)?.setValue(answer);
    this.prueba = option;
    console.log(this.prueba);
    console.log('valor seleccionado para:' + option + ':', answer);
  };

  verIdQuestion():void {
    this.questionsList.forEach((i, id)=>{
      console.log('Id: ' + i.id + ' indice: ' + id);
    })
  }


  ngOnInit(): void {
    this.newSurvey = this.initForm();
    /* this.newSurvey.setValidators */

    this.sQuestion.lista().subscribe(data => {
      this.questionsList = data;
      alert("Se cargaron las preguntas")
    }, err => {
      alert("No se pudo cargar preguntas")
    });
  };

  initForm(): FormGroup {
    const soption = 'answerSelect_' + this.prueba;
    return this.fb.group({
      answerSelect: ['', [Validators.required]],
      soption: ['', []],
      
    });
  };

}
