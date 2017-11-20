import { Injectable } from "@angular/core";
import { HttpClientModule, HttpParams, HttpClient } from "@angular/common/http";
import "rxjs/add/operator/map";
import { Summary } from './summary.interface';

@Injectable()
export class SummaryService {
  endpointBase: string = 'https://hnapi.herokuapp.com/summaries';

  constructor(private http: HttpClient) {}

  load() {
    let headers = new Headers();
    return this.http.get<Summary[]>(`${this.endpointBase}?entries=10`)
    .map(data => data);
  }

  getSummariesPage(page: number) {
    let headers = new Headers();
    return this.http.get<Summary[]>(`${this.endpointBase}?entries=10&offset=${page * 10}`)
    .map(data => data);
  }
}
