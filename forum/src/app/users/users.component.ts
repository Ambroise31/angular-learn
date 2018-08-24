import {Component, OnInit} from '@angular/core';
import {ForumService} from "../forum.service";




@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(public service:ForumService) {
    this.service.fetchUsersList();
  }



  ngOnInit() {}

}



