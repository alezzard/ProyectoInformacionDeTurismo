import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminServerPageComponent } from './admin-server-page/admin-server-page.component';
import { AdminServerRoutingModule } from './admin-server-routing.module';



@NgModule({
  declarations: [
    AdminServerPageComponent
  ],
  imports: [
    CommonModule,
    AdminServerRoutingModule
  ],
  exports: [
    AdminServerPageComponent
  ],
})
export class AdminServerModule { }
