import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ForumComponent } from './forum/forum.component';
import { UsersComponent } from './users/users.component';
import {HttpClientModule} from "@angular/common/http";
import { UserCComponent } from './user-c/user-c.component';
import { TabComponent } from './tab/tab.component';
import { TopicslistComponent } from './topicslist/topicslist.component';
import { TopicComponent } from './topic/topic.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    ForumComponent,
    UsersComponent,
    UserCComponent,
    TabComponent,
    TopicslistComponent,
    TopicComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
