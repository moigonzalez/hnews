import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { NewsService } from '../shared/services/news/news.service';
import { TagPipe } from '../shared/pipes/tags.pipe';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
    TagPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [NewsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
