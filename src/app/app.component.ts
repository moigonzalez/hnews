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
  title: string = 'HackerNews';
  summariesList: Array<Summary> = [];
  summariesIsLoading: boolean = true;
  currentPage: number = 0;

  constructor(private summaryService: SummaryService) {}

  ngOnInit() {
    this.summaryService
      .load()
      .subscribe(
        loadedNews => {
          loadedNews.forEach(x => this.summariesList.push(x));
          this.currentPage++;
          this.summariesIsLoading = false;
      }
    );
  }

  loadMoreSummaries(e) {
    const PAGE_OFFSET = 100;
    if ((window.innerHeight + window.pageYOffset) >= (document.body.scrollHeight - PAGE_OFFSET) && !this.summariesIsLoading) {
      this.summariesIsLoading = true;
      this.summaryService
        .getSummariesPage(this.currentPage)
        .subscribe(loadedNews => {
          loadedNews.forEach(x => this.summariesList.push(x));
          this.currentPage++;
          this.summariesIsLoading = false;
        });
    }
  }
}
