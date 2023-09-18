import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgFor } from '@angular/common';
import { Question } from 'src/app/models/questions';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { Survey } from 'src/app/models/survey';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule, 
    MatInputModule, 
    MatSelectModule,
    ReactiveFormsModule, 
    NgFor,
    MatCheckboxModule
  ],
})
export class QuestionComponent implements OnInit {


  newQuestion!: FormGroup;

  nameQuestion!: string;
  questionType!: string;
  answer!: string;
  questionList: Question[] = [];
  question!: Question;
  survey!: Survey;
  questionCondition!: string;
  answerRedacte: string = "tu hermana";

  questionsType = new FormControl('');
  questionTypeList: string[] = ['MultipleChoice', 'Redactar'];

  constructor( private readonly fb: FormBuilder) { }

  ngOnInit(): void {
    this.newQuestion = this.initForm();
  }

  createQuestion(): void {
    this.nameQuestion = this.newQuestion.get('nameQuestion')?.value;
    this.questionType = this.newQuestion.get('questionType')?.value;
    
    console.log(`La pregunta es ${this.nameQuestion} y es de tipo ${this.questionType}`);

    this.question = new Question(this.nameQuestion, this.questionType, this.answer);
    this.questionList.push(this.question);
    this.survey = new Survey(this.questionList); 
  }

  defineQuestion(questionT: string []): string {

    if (questionT.length === 0){
      console.error("seleccione una opcion de pregunta");
      this.questionCondition = "seleccione una opcion de pregunta";
      
    } else if (questionT.indexOf("Redactar") > -1 && questionT.indexOf("MultipleChoice") === -1){
      this.questionCondition = "Redactar"
    } else if (questionT.indexOf("MultipleChoice") > -1 && questionT.indexOf("Redactar") === -1){
      this.questionCondition = "MultipleChoice"
    } else if (questionT.indexOf("MultipleChoice") > -1 && questionT.indexOf("Redactar") >-1) {
      this.questionCondition = "ambos"
    }
    
    console.log(this.questionCondition);
    return this.questionCondition;
  };
   
  initForm(): FormGroup {
    return this.fb.group({
      nameQuestion: ['', [Validators.required]],
      questionType: ['', [Validators.required]],
      answerRedacte: ['', [Validators.required]]
    })
  };




}



