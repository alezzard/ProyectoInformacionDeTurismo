import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EncuestaPageComponent } from './encuesta-page/encuesta-page.component';
import { EncuestaRoutingModule } from './encuesta-routing.module';
import { QuestionComponent } from '../admin-server/newQuestion/question.component';



@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    EncuestaRoutingModule,
    EncuestaPageComponent,
    QuestionComponent,
    FormsModule,
  ],
  exports: [
    EncuestaPageComponent,
  ],
  providers: [],
})
export class EncuestaModule { }
