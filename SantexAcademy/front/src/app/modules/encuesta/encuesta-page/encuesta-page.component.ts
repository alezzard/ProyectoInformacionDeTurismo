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
import { SurveyService } from 'src/app/core/services/survey.service';
import { Survey } from 'src/app/models/survey';
import { AnswerService } from 'src/app/core/services/answer.service';
import { Answer } from 'src/app/models/answer';

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
  
  newForm!: FormGroup;
  showE: boolean = false;
  answerSelect!: string;
  idQuestion!: number;
  newSurvey: Survey = new Survey("survey", "newsurvey");
  idUser!: number;
  idSurvey!: number;


  questionsList!: Question[];
  optionsAnswerList: string[][] = [];

  constructor( 
      private tokenService: TokenService, 
      private router: Router, 
      private sQuestion: SQuestionService,
      private sSurvey: SurveyService, 
      private sAnswer: AnswerService,
      private readonly fb: FormBuilder
      ){};
  
  logout():void {
    this.tokenService.logOut();
    this.router.navigate(['/login']);
  }

  createSurvey():void {
    const saveAnswer = new Answer (1 , this.idSurvey, this.idQuestion , this.answerSelect, " description");
    let pruebaAnswer : Answer;
    this.sAnswer.createAnswer(saveAnswer).subscribe( data => {
      pruebaAnswer = data;
      console.log(pruebaAnswer)
    });
    this.showE = false;
  };

  backHome():void {
    this.router.navigate(['/home']);
  }

  newEncuesta():void {
    let pruebaSurvey : Survey;
     
    this.sSurvey.createSurvey(this.newSurvey).subscribe(data =>{
      pruebaSurvey = data;
      this.idSurvey = data.id;
      console.log(pruebaSurvey, "su id: " + this.idSurvey);
    })
    this.showE = true;
    
  };

  saveEncuesta():void {
    
  };

  selectAnswer(optionSelect: string, event: MatCheckboxChange, question : Question ):void {
    const isChecked = event.checked;
    const answer = isChecked ? 'valorElegido' : '';
    this.newForm.get('answerSelect_' + optionSelect)?.setValue(answer);
    this.answerSelect = optionSelect;
    this.idQuestion = question.id!;
    console.log(this.answerSelect, this.idQuestion);
    console.log('valor seleccionado para:' + this.answerSelect + ':', answer);
  };

  verIdQuestion():void {
    this.questionsList.forEach((i, id)=>{
      console.log('Id: ' + i.id + ' indice: ' + id);
    })
  }


  ngOnInit(): void {
    this.newForm = this.initForm();
    /* this.newForm.setValidators */

    this.sQuestion.lista().subscribe(data => {
      this.questionsList = data;
      console.log(this.questionsList);
      alert("Se cargaron las preguntas")
    }, err => {
      alert("No se pudo cargar preguntas")
    });
  };

  initForm(): FormGroup {
    const soption = 'answerSelect_' + this.answerSelect;
    return this.fb.group({
      answerSelect: ['', [Validators.required]],
      soption: ['', []],
      
    });
  };

}
