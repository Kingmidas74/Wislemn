import { Injectable } from '@angular/core';
import { ApiHttpService } from '../api-interceptor';
import { Observable, Subscriber } from 'rxjs';
import { Note } from 'src/app/models/note';

import data from './data.json';  

@Injectable()
export class NoteService {  

  constructor(private apiHttpClient:ApiHttpService) { }

  public getNotes():Observable<Array<Note>>
  {
    return new Observable((observer: Subscriber<Array<Note>>) => {
        observer.next(data.notes);
        observer.complete();
    })
  }
  
}
