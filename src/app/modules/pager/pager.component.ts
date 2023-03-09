import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from 'src/app/models/article';

@Component({
  selector: 'app-pager',
  templateUrl: './pager.component.html',
  styleUrls: ['./pager.component.scss']
})
export class PagerComponent {

  @Input()
  articles!: Observable<Array<Article>>

  @Input()
  current!: number

  @Output()
  select: EventEmitter<number> = new EventEmitter();

  selectArticle(n:number) {
    this.select.emit(n);
  }

}
