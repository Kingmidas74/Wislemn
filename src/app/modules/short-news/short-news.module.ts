import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShortNewsComponent } from './short-news.component';



@NgModule({
  declarations: [
    ShortNewsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ShortNewsComponent
  ]
})
export class ShortNewsModule { }
