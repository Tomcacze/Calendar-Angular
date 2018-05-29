import { Component, OnInit, Input } from '@angular/core';
import { Content } from '../calendar.module';

@Component({
  selector: 'calendar-row',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.css']
})
export class RowComponent implements OnInit {

  constructor() {
    /*this.lekce = [
      {start : 10, stop : 12},
      {start : 13, stop : 14},
      {start : 15, stop : 20}
    ];*/
    console.log(this.content);
    
   }

  @Input() content: Content[];
  ngOnInit() {
  }
}
