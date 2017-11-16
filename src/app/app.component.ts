import { Component, OnInit } from "@angular/core";
import { NewsService } from '../shared/services/news/news.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [NewsService]
})
export class AppComponent implements OnInit {
  title = 'HackerNews';
  summariesList: Array<String> = [];

  constructor(private newsService: NewsService) {}

  ngOnInit() {
    this.newsService.load()
      .subscribe(loadedNews => {
        loadedNews.forEach(x => this.summariesList.push(x));
        });
  }
}
