import { Component, OnInit } from '@angular/core';
import { StorageMap } from '@ngx-pwa/local-storage';
import { Observable, tap } from 'rxjs';
import { ArticleService } from './api/services/article.service';
import { NoteService } from './api/services/note.service';
import { Article } from './models/article';
import { ARTICLES_KEY, NOTES_KEY } from './models/constants';
import { Note } from './models/note'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Cohen gardens';

  articles: Observable<Array<Article>>
  notes: Observable<Array<Note>>


  constructor(
    private articleService: ArticleService,
    private noteService: NoteService,
    private storage: StorageMap
  ) {
    this.articles = this.articleService.getArticles().pipe(
      tap(articles => {
        this.storage.set(ARTICLES_KEY, articles).subscribe();
      }),
    )
    this.notes = this.noteService.getNotes().pipe(
      tap(notes => {
        this.storage.set(NOTES_KEY, notes).subscribe();
      }),
    )
  }

  ngOnInit(): void {
    
  }
}
