import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable()
export class FetchDataService {

  constructor(private _http: HttpClient) { }
  fetchData() {
    return this._http.get('../assets/data.json');

  }

}
