import {Component, Input, OnInit} from '@angular/core';
import {ForumService, User} from "../forum.service";

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.css']
})
export class TopicComponent implements OnInit {

  @Input() topic: User;

  constructor(public service:ForumService) { }

  ngOnInit() {
  }

}
