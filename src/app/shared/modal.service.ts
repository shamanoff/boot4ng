import { Injectable } from '@angular/core';
import {NgbModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import {ModalContentComponent} from '../modal-content/modal-content.component';
import {User} from './user';

@Injectable()
export class ModalService {

  constructor(private modalService: NgbModal) {
  }
  public editItem(user: User): NgbModalRef {
    const modalRef = this.modalService.open(ModalContentComponent);
    modalRef.componentInstance.user = user;
    return modalRef;
  }
  public addItem(): NgbModalRef {
    const modalRef = this.modalService.open(ModalContentComponent);
    return modalRef;
  }

}
