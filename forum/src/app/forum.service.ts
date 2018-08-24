import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";


export type User = {
  name: string;
  admin: boolean;
  id: number;
  email: string;
  statement: string
}
/*
export type Topic={
  id: number;
  title:string;
  content:string;
  user:User;
  comment: [];

}
*/



@Injectable({
  providedIn: 'root'
})
export class ForumService {

  constructor(public http: HttpClient) {
  }

  users: User[] = [];

  logged: User = undefined;

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


  /*fetchTopicList(){
    this.http
      .get<any[]>('http://localhost:8000/api/topics')
      .suscribe( (r:any[])=> {
      this.topics=r.map(function (topic:any) {
        return{
          id: topic.id,
          title: topic.title,
          content: topic.content,
          user: topic.user,
          comment: topic.comment,
          tag: topic.tag
        };
        console.log(this.topics);
      })
    } )

  }
*/


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
