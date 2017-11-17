import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { SummaryService } from '../shared/services/summaries/summary.service';
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
  providers: [SummaryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
