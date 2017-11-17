import { Injectable } from "@angular/core";
import { HttpClientModule, HttpParams, HttpClient } from "@angular/common/http";
import "rxjs/add/operator/map";
import { Summary } from './summary.interface';

@Injectable()
export class SummaryService {
  constructor(private http: HttpClient) {}

  load() {
    let headers = new Headers();
    return this.http.get<Summary[]>('https://hnapi.herokuapp.com/summaries?entries=10')
    .map(data => data);
  }
}
