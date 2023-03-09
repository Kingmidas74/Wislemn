import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Article } from 'src/app/models/article';
import { Location } from '@angular/common'

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.scss']
})
export class FirstPageComponent {

  @Input()
  articles!: Observable<Array<Article>>

  currentArticleNumber: number = 2

  constructor(private location: Location) {
    let s = this.location.path(false)
    let number = Number(s.split('/').pop())
    if (number > 0) {
      this.currentArticleNumber = number
      this.location.replaceState('/articles/'+number);
    }
  }

  loadArticle(n: any) {
    this.location.replaceState('/articles/'+n);
    this.currentArticleNumber = n
  }
}
