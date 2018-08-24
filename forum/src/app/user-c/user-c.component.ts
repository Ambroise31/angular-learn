import {Component, Input, OnInit} from '@angular/core';
import {ForumService, User} from "../forum.service";

@Component({
  selector: 'app-user-c',
  templateUrl: './user-c.component.html',
  styleUrls: ['./user-c.component.css']
})

export class UserCComponent implements OnInit {

  @Input() user: User;


  constructor(public service: ForumService) {
  }

  ngOnInit() {

  }

  isLogged() {
    this.service.updateLog(this.user.name)
  }

}
