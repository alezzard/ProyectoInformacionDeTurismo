import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EncuestaPageComponent } from './encuesta-page/encuesta-page.component';
import { EncuestaRoutingModule } from './encuesta-routing.module';


@NgModule({
  declarations: [
    EncuestaPageComponent
  ],
  imports: [
    CommonModule,
    EncuestaRoutingModule
  ],
  exports: [
    EncuestaPageComponent,
  ],
  providers: [],
})
export class EncuestaModule { }
