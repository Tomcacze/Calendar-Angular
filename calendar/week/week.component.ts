import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'calendar-week',
  templateUrl: './week.component.html',
  styleUrls: ['./week.component.css']
})
export class WeekComponent implements OnInit {

  Week = 0;
  private today: number;
  private  oneDay = 86400000;
  private oneWeek = 604800000;
 // WeekDays: Date[] = [];
  constructor() {
    this.today  = Date.now();
   }

  ngOnInit() {
  }

  OnWeekPlusClick() {
    this.Week++;
  }
  OnWeekMinusClick() {
    this.Week--;
  }

  get WeekDays() {
    let WeekDays: Date[] = [];
    let todayDate: Date = new Date(this.today);
    let monday = this.today - ( ( todayDate.getDay() - 1 ) * this.oneDay );
    for (let i = 0; i < 7; i++)
    {
      WeekDays.push(new Date(monday + ( i * this.oneDay) + this.Week * this.oneWeek ));
    }
    return WeekDays;
  }

}
