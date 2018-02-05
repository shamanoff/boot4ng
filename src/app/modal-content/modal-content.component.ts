import {Component, Input, OnInit} from '@angular/core';
import {User} from '../shared/user';

@Component({
  selector: 'app-modal-content',
  templateUrl: './modal-content.component.html',
  styleUrls: ['./modal-content.component.scss']
})
export class ModalContentComponent implements OnInit {
  @Input('user') public user: User;

  constructor() {
  }

  ngOnInit() {
  }

}
