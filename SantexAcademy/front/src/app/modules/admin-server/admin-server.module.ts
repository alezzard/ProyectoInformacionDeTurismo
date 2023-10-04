import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminServerPageComponent } from './admin-server-page/admin-server-page.component';
import { AdminServerRoutingModule } from './admin-server-routing.module';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    AdminServerRoutingModule,
    AdminServerPageComponent
  ],
  exports: [
    AdminServerPageComponent
  ],
})
export class AdminServerModule { }
