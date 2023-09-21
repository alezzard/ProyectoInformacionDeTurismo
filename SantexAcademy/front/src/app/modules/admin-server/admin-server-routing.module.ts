import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminServerPageComponent } from './admin-server-page/admin-server-page.component';



const routes: Routes = [
  {
    path: '',
    component: AdminServerPageComponent,
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminServerRoutingModule { }
