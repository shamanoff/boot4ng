import {Component, OnInit, ViewChild} from '@angular/core';
import {User} from "../shared/user";
import {FetchDataService} from "../shared/fetch-data.service";
import {Observable} from "rxjs/Observable";
import * as _ from 'lodash';
import {NgbdModalComponen} from "../modal/modal.component";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],

})
export class TableComponent implements OnInit {
@ViewChild('app-modal')appModal: NgbdModalComponen;
  users: Observable<any>;
  constructor(private _dataServ: FetchDataService) { }

  ngOnInit() {
    this.users = this._dataServ.fetchData();
  }

  /*openModal(user){
    this.appModal.open();
  }*/
  saveEditUser(user){

  }
  deleteUser(id){

  }
}
