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

  constructor(private _activeModal: NgbActiveModal) {
  }

  ngOnInit() {
  }

  saveEditedUser() {
    this._activeModal.close();
  }

  closeModal() {
    this._activeModal.close();
  }
}
