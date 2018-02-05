import {Component, OnInit} from '@angular/core';
import {FetchDataService} from '../shared/fetch-data.service';
import {Observable} from 'rxjs/Observable';
import * as _ from 'lodash';
import {User} from '../shared/user';
import 'rxjs/add/operator/map';
import {ModalService} from '../shared/modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  users: User[] = [];
  fetchedUsers: Observable<any>;

  constructor(private _dataServ: FetchDataService, private _modalServ: ModalService) {
    console.log('constructor');
    this.fetchedUsers = this._dataServ.fetchData();
  }

  ngOnInit() {
    console.log('oninit');
    this.uploadUsers(this.fetchedUsers);
  }

  uploadUsers(fetchedUsers) {
    fetchedUsers.map(
      res => this.users = res
    ).subscribe();

  }

  private onEditItem(user: User) {
    const modalRef = this._modalServ.editItem(user);

  }

}
