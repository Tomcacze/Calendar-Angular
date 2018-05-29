import { Component, OnInit, Input } from '@angular/core';
import {Content} from '../calendar.module';
@Component({
  selector: 'calendar-row-item',
  templateUrl: './row-item.component.html',
  styleUrls: ['./row-item.component.css']
})
export class RowItemComponent implements OnInit {



   Hour = 3600000;
  @Input() content: Content;

  constructor() { }

  ngOnInit() {
  }

  get StartPosition() {
    
    return (this.getHours(this.content.start)-8) * (100 / 12) + '%';
  }

  get Width() {
    return (this.getHours(this.content.stop) - this.getHours(this.content.start)) * (100 / 12) + '%';
  }




  get Slots() {
    return this.content.SlotsTaken + "/" + this.content.SlotsMax;
  }

  get Description() {
    return this.content.Description;
  }

  get Title() {
    return this.content.Title;
  }

  get Time() {
     return this.content.start.getHours() + ':' + this.content.start.getMinutes() + 
     ' - '+ this.content.stop.getHours() + ':' + this.content.stop.getMinutes();
    
  }

  getHours(date: Date)
  {
    return date.getHours() + date.getMinutes()*0.016667;
  }


}
