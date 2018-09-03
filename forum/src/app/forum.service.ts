import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";


export interface User {
  id: number;
  name: string;
  admin?: boolean;
  email: string;
  statement?: string; // Ouch !!
}

export interface Admin extends User {
  statement: string;
}

export interface IComment {
  id: number;
  content: string;
  user?: User;
  anonymous?: boolean;
  tags?: Array<String>;
  score?: number;
}

export interface Topic {
  id?: number;
  title: string;
  content: string;
  comments: Array<IComment>;
  user: User;
  tags?: Array<String>;
}


@Injectable({
  providedIn: 'root'
})
export class ForumService {

  constructor(public http: HttpClient) {
  }

  activTopic: Topic = undefined;
  page: string = 'topics';
  users: User[] = [];
  topics: Topic[] = [];
  logged: User = undefined;
  comments: IComment[] = [];


  updateLog(logged) {
    this.logged = logged;
    console.log("loggedXXXXXXXXXXXXXXXXXXXXXXXXXXXx", logged);
  }

  fetchUsersList() {
    this.http
      .get<any[]>('http://localhost:8000/api/users')
      .subscribe((r: any[]) => {
        this.users = r.map(user => mapAnyToCoin(user));
        console.log(this.users);
      });
  }


  fetchTopicList() {
    this.http
      .get<any[]>('http://localhost:8000/api/topics')
      .subscribe((r: any[]) => {
        this.topics = r.map(topic => mapAnyTopic(topic));
        console.log(this.topics);
      })
  }

  updatePage(page) {
    this.page = page;
    console.log('change page to', page);
  }

  updateActivTopic(activTopic: Topic) {
    this.activTopic = activTopic
    console.log('activTopic set to:', activTopic);
  }

  createComment(content, topic) {
    let comment:IComment = {
      id: -1,
      content: content,
      user: this.logged,
      score: 0
    };

    this.http
      .post(`http://localhost:8000/api/comments/topic/${topic.id}`,comment)
      .subscribe(newComment => topic.comments.push(newComment) );

  }

}


function mapAnyToCoin(user: any): User {
  return {
    name: user.name,
    admin: user.admin,
    id: user.id,
    email: user.email,
    statement: user.statement
  }
}

function mapAnyTopic(topic: any): Topic {
  return {
    id: topic.id,
    title: topic.title,
    content: topic.content,
    user: topic.user,
    comments: topic.comments,
    tags: topic.tags
  }
}

