import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-short-news',
  templateUrl: './short-news.component.html',
  styleUrls: ['./short-news.component.scss']
})
export class ShortNewsComponent {
  

  @Input()
  title!: string;

  @Input()
  description!: string;

  getRandomClass(): string {
    const availableClasses = ['dream', 'buzz','force', 'hermi']
    return availableClasses[this.getRandomInt(availableClasses.length)];
  }
  
  getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
  }
}
