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
import { SQuestionService } from 'src/app/core/services/s-question.service';
import { Router } from '@angular/router';

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

  question!: string;
  description!: string;
  answer!: string;
  questionList: Question[] = [];
  questionM!: Question;
  survey!: Survey;
  questionCondition!: string;

  questionsType = new FormControl('');
  descriptionList: string[] = ['MultipleChoice', 'Redactar'];

  constructor( private readonly fb: FormBuilder, private sQuestion: SQuestionService, private router: Router) { }

  ngOnInit(): void {
    this.newQuestion = this.initForm();

    this.sQuestion.lista().subscribe(data => {
      this.questionList = data;
    }, err => {
      alert("No se pudo cargar preguntas")
    })
  }
   
  // Crear Preguntas //
  createQuestion(): void {
    this.question = this.newQuestion.get('question')?.value;
    this.description = this.newQuestion.get('description')?.value.toString();
    /* console.log(`La pregunta es ${this.question} y es de tipo ${this.description}`); */
    this.questionM = new Question(this.question, this.answer, this.description);
    this.sQuestion.save(this.questionM).subscribe(
      data=>{ 
        alert("Question añadida correctamente");
        }, err => { alert("Falló");
           this.router.navigate(['home']);
            }
    );
    /* this.survey = new Survey(this.questionList);  */
  }
   
  // Define Tipo de Pregunta //
  defineQuestion(): string {
    this.description = this.newQuestion.get('description')?.value.toString();
    console.log(this.description); 
    return this.description;
  };

  crearOpciones():void{
    this.answer = this.newQuestion.get('answer')?.value.toString();
  }
   

  initForm(): FormGroup {
    return this.fb.group({
      question: ['', [Validators.required]],
      description: ['', [Validators.required]],
      answer: ['', [Validators.required]]
    })
  };




}



