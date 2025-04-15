import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DateTimeComponent } from './time/date-time/date-time.component';

const routes: Routes = [
  {
    path:"date-time",
    component : DateTimeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
