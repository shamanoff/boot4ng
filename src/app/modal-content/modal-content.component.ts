import {Component, Input, OnInit} from '@angular/core';
import {User} from '../shared/user';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-content',
  templateUrl: './modal-content.component.html',
  styleUrls: ['./modal-content.component.scss']
})
export class ModalContentComponent implements OnInit {
  @Input('user') public user: User;
  onEditUser = {
    id: -1,
    first_name: '',
    last_name: '',
    email: ''
  };

  constructor(private _activeModal: NgbActiveModal) {
  }

  ngOnInit() {
  }

  saveEditedUser(first, last, email) {
    if(this.user.id === -1){
      this.onEditUser.id = Math.floor(Math.random() * (1000 - 100 + 1)) + 100;
    }else {this.onEditUser.id = this.user.id;}

    this.onEditUser.first_name = first.value;
    this.onEditUser.last_name = last.value;
    this.onEditUser.email = email.value;
    this._activeModal.close(this.onEditUser);
    console.log(this.onEditUser);
  }

  closeModal() {
    this._activeModal.dismiss();
  }
}
