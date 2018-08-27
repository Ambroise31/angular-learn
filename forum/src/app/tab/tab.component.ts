import {Component, Input, OnInit} from '@angular/core';
import {ForumService} from "../forum.service";

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class TabComponent implements OnInit {


  @Input() page:string;

  constructor(public service: ForumService) {
  }

  ngOnInit() {
  }

  setUser() {
    this.service.updatePage('users')
  }

  setTopic() {
    this.service.updatePage('topics')
  }


}
