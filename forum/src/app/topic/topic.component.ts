import {Component, Input, OnInit} from '@angular/core';
import {ForumService, IComment, Topic, User} from "../forum.service";

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.css']
})
export class TopicComponent implements OnInit {

  @Input() topic: Topic;
  @Input() comment: IComment;

  constructor(public service: ForumService) {
  }

  ngOnInit() {
  }

  setActivTopic() {
    this.service.updateActivTopic(this.topic);
  }

}
