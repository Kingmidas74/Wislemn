import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstPageComponent } from './first-page.component';
import { ImageModule } from '../image/image.module';
import { PagerModule } from '../pager/pager.module';
import { Base64Pipe } from './base64.pipe';
import { SafeHtmlPipe } from './safeHtml.pipe';



@NgModule({
  declarations: [
    FirstPageComponent,
    Base64Pipe,
    SafeHtmlPipe
  ],
  imports: [
    CommonModule,
    ImageModule,
    PagerModule
  ],
  exports: [
    FirstPageComponent
  ]
})
export class FirstPageModule { }
