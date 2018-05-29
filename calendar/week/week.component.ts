import { Component, OnInit } from '@angular/core';
import {Content } from '../calendar.module'


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

content : Content[]  = [
    {
      Title: 'Joga s Lencou',
      start: new Date(2018,5,29,15),
      stop: new Date(2018,5,29,17),
      SlotsMax: 30,
      SlotsTaken: 10,
      Description: 'Pod si zacvicit s Lencou'
    },
    {
      Title: 'Joga s Pavlem',
      start: new Date(2018,5,29,8),
      stop: new Date(2018,5,29,10),
      SlotsMax: 30,
      SlotsTaken: 15,
      Description: 'Stáhni půlku jako by ti tam chtěl vlézt had.'
    }
  ];
  
  get Content()
  {
    return this.content;
  }


  

  OnWeekPlusClick() {
    this.Week++;

    console.log(this.content);
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
