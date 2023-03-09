import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ApiHttpService, ApiInterceptor, API_INTERCEPTOR } from "./api-interceptor";
import { ArticleService } from "./services/article.service";
import { NoteService } from "./services/note.service";


@NgModule({
    declarations: [],
    imports: [
      CommonModule
    ],
    providers: [
      ApiInterceptor,
      {provide: API_INTERCEPTOR, useClass: ApiInterceptor, multi: true},
      ApiHttpService,
      ArticleService,
      NoteService
    ]
  })
  export class ApiModule { }
  