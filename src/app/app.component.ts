import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { setTheme } from 'ngx-bootstrap/utils';
import { CalculatorService } from './service/calculator.service';
import { Type } from './model';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  startTime: Date = new Date();
  endTime: Date = new Date();
  mstep = 1;
  distance: number;
  person: Type[] = [];

 constructor(private calculatorService: CalculatorService){
   setTheme('bs4');
 }

 ngOnInit() {
   const getData = this.calculatorService.getData().subscribe((data) => {
    this.person.push(data.A);
    this.person.push(data.B);
    console.log(this.person);

   })

 }

  onSubmit(form: NgForm){
    const data = {name: form.value.personId, startTime: form.value.StartTime.getTime(), endTime: form.value.EndTime.getTime()}
    this.calculatorService.postData(data).subscribe(data => {
      this.distance = data;
    });
  }
}
