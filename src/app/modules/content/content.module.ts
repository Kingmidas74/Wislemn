import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentComponent } from './content.component';
import { FirstPageModule } from '../first-page/first-page.module';
import { ShortNewsModule } from '../short-news/short-news.module';



@NgModule({
  declarations: [
    ContentComponent
  ],
  imports: [
    CommonModule,
    FirstPageModule,
    ShortNewsModule
  ],
  exports: [
    ContentComponent
  ]
})
export class ContentModule { }
