import {Component, OnInit} from '@angular/core';
import {FetchDataService} from "../shared/fetch-data.service";
import {Observable} from "rxjs/Observable";
import * as _ from 'lodash';
import {User} from "../shared/user";
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],

})
export class TableComponent implements OnInit {
  users: User[] = [];
  fetchedUsers: Observable<any>;
  onEditUser;

  constructor(private _dataServ: FetchDataService) {
    console.log('constructor');
    this.fetchedUsers = this._dataServ.fetchData();


  }

  public isCollapsed = false;

  ngOnInit() {
    console.log('oninit');
    // this.users = this._dataServ.fetchData();
    this.uploadUsers(this.fetchedUsers);
  }

  uploadUsers(fetchedUsers){
   fetchedUsers.map(
     res => this.users = res
   ).subscribe();

  }
  close() {
    this.isCollapsed = !this.isCollapsed;
  }

  openEditForm(user) {
    this.isCollapsed = !this.isCollapsed;
    this.onEditUser = user;
  }

  saveEditedUser(){
    let n = this.onEditUser.id;
    let index = _.findIndex(this.users, {id: n});
    console.log(index);

    // const ID = this.onEditUser.id;
    this.users[index] = Object.assign(this.onEditUser);

    this.isCollapsed = !this.isCollapsed;
  }
  deleteUser(id) {
    let index = _.findIndex(this.users, {id: id});
    this.users.splice(index, 1);
  }
}
