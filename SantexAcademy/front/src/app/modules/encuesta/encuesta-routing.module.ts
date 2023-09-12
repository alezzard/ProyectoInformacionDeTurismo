import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EncuestaPageComponent } from './encuesta-page/encuesta-page.component';
import { authGuard } from 'src/app/core/guards/auth.guard';
import { QuestionComponent } from './question/question.component';

const routes: Routes = [
  {
    path: '',
    component: EncuestaPageComponent,
    children: [],
  },
  {
    path: 'newQuestion',
    component: QuestionComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EncuestaRoutingModule { }