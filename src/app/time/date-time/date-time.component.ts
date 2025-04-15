import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-date-time',
  standalone: false,
  templateUrl: './date-time.component.html',
  styleUrl: './date-time.component.css'
})
export class DateTimeComponent {
  today = new Date(); 
  

  ngOnInit() {
   setInterval(() => {
     this.today = new Date();
   }, 1000);
 }
}
