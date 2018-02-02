import { Component, OnInit } from '@angular/core';
import {User} from "../shared/user";
import {FetchDataService} from "../shared/fetch-data.service";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  users: Observable<any>;
  constructor(private _dataServ: FetchDataService) { }

  ngOnInit() {
    this.users = this._dataServ.fetchData();
  }

}
