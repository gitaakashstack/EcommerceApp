import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userSub = new Subject<User>();
  constructor() { }

  addUser(userData: User) {
    //console.log(userData);
    this.userSub.next(userData);
  }

  get user$(): Observable<User> {
    return this.userSub.asObservable();
  }
}
