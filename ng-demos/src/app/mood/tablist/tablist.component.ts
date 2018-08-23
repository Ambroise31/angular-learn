import {Component, OnInit} from '@angular/core';
import {MoodService} from "../mood.service";

@Component({
  selector: 'app-tablist',
  templateUrl: './tablist.component.html',
  styleUrls: ['./tablist.component.css']
})
export class TablistComponent implements OnInit {


  constructor(public service: MoodService) {
  }

  ngOnInit() {
  }

  happy() {
    this.service.updateMood('happy')
  }

  soso() {
    this.service.updateMood('soso')
  }


  angry() {
    this.service.updateMood('angry')
  }
}
