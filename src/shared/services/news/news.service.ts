import { Injectable } from "@angular/core";
import { HttpClientModule, HttpParams, HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Rx";
import "rxjs/add/operator/map";

@Injectable()
export class NewsService {
  constructor(private http: HttpClient) {}

  load() {
    let headers = new Headers();
    return this.http.get('https://hnapi.herokuapp.com/summaries?entries=10')
    .map(data => data);
  }

  handleErrors(error: Response) {
    return Observable.throw(error);
  }
}
