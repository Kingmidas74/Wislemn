import { Injectable } from '@angular/core';
import { ApiHttpService } from '../api-interceptor';
import { Observable, Subscriber } from 'rxjs';
import { Article } from 'src/app/models/article';

import data from './data.json';  

@Injectable()
export class ArticleService {  

  constructor(private apiHttpClient:ApiHttpService) { }

  public getArticles():Observable<Array<Article>>
  {
    return new Observable((observer: Subscriber<Array<Article>>) => {
        observer.next(data.articles);
        observer.complete();
    })
  }

}
