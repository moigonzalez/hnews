import { Component, OnInit } from "@angular/core";
import { CommonModule } from '@angular/common';
import { NewsService } from '../shared/services/news/news.service';
import { TagPipe } from '../shared/pipes/tags.pipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [NewsService]
})
export class AppComponent implements OnInit {
  title = 'HackerNews';
  summariesList: Array<String> = [];
  summariesIsLoading: Boolean = true;

  constructor(private newsService: NewsService) {}

  ngOnInit() {
    this.newsService.load()
      .subscribe(loadedNews => {
        loadedNews.forEach(x => this.summariesList.push(x));
        this.summariesIsLoading = false;
        });
  }
}
