import { Component, OnInit } from '@angular/core';
import {ForumService} from "../forum.service";

@Component({
  selector: 'app-topicslist',
  templateUrl: './topicslist.component.html',
  styleUrls: ['./topicslist.component.css']
})
export class TopicslistComponent implements OnInit {

  constructor(public service:ForumService) {
    this.service.fetchTopicList();
  }

  ngOnInit() {
  }

}
