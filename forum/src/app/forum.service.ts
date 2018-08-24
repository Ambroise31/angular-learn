import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";



export type User = {
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class ForumService {

  constructor(public http: HttpClient) { }

  users: User[] = [];


  fetchUsersList() {

    this.http
      .get<any[]>('http://localhost:8000/api/users')
      .subscribe((r: any[]) => {
        this.users = r.map(user => mapAnyToCoin(user));
        console.log(this.users);
      });
  }
}

function mapAnyToCoin(user: any): User {
  return {
    name: user.name,

  }
}
