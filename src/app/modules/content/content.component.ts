import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from 'src/app/models/article';
import { Note } from 'src/app/models/note';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent {

  @Input()
  articles!:Observable<Array<Article>>

  @Input()
  notes!:Observable<Array<Note>>

}
