import { Component, OnInit, Input } from '@angular/core';
import {Content} from '../calendar.module';
@Component({
  selector: 'calendar-row-item',
  templateUrl: './row-item.component.html',
  styleUrls: ['./row-item.component.css']
})
export class RowItemComponent implements OnInit {

  @Input() content: Content;
  Color = false;
  Tooltip = false;
  constructor() { }

  ngOnInit() {
  }

  get StartPosition() {
    return (this.content.start - 8) * (100 / 12) + '%';
  }

  get Width() {
    return (this.content.stop - this.content.start) * (100 / 12) + '%';
  }

  OnItemClick() {
    this.Tooltip = true;
  }

  OnTooltipClick() {
    this.Tooltip = false;
  }

}
