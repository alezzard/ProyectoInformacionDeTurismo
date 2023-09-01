import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EncuestaPageComponent } from './encuesta-page/encuesta-page.component';
import { EncuestaRoutingModule } from './encuesta-routing.module';


@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    EncuestaRoutingModule,
    EncuestaPageComponent
  ],
  exports: [
    EncuestaPageComponent,
  ],
  providers: [],
})
export class EncuestaModule { }
