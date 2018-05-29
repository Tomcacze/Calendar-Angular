import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RowComponent } from './row/row.component';
import { RowItemComponent } from './row-item/row-item.component';
import { WeekComponent } from './week/week.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    RowComponent,
    WeekComponent
  ],
  declarations: [RowComponent, RowItemComponent, WeekComponent]
  ,
  providers: []
})
export class CalendarModule { }
export interface Content {
  Title: string;
  start: Date;
  stop: Date;
  SlotsMax: number;
  SlotsTaken: number;
  Description: string;

}