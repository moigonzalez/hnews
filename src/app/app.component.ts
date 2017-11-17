import { Component, OnInit } from "@angular/core";
import { CommonModule } from '@angular/common';
import { SummaryService } from '../shared/services/summaries/summary.service';
import { TagPipe } from '../shared/pipes/tags.pipe';
import { Summary } from '../shared/services/summaries/summary.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [SummaryService]
})
export class AppComponent implements OnInit {
  title = 'HackerNews';
  summariesList: Array<Summary> = [];
  summariesIsLoading: Boolean = true;

  constructor(private summaryService: SummaryService) {}

  ngOnInit() {
    this.summaryService.load()
      .subscribe(loadedNews => {
        loadedNews.forEach(x => this.summariesList.push(x));
        this.summariesIsLoading = false;
        });
  }
}
