import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { User } from '../models/User';

@Injectable()
export class UserService {
  users: User[];
  data: Observable<any>;

  constructor() { 
    this.users = [
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'jdoe@test.com',
        isActive: true,
        registered: new Date('12/12/2018 08:30:00'),
        hide: true
    },
    {
      firstName: 'Jane',
      lastName: 'Doe',
      email: 'jadoe@test.com',
      isActive: false,
      registered: new Date('01/02/2018 08:30:00'),
      hide: true
    },
    {
      firstName: 'Jack',
      lastName: 'Frost',
      email: 'jf@test.fr',
      isActive: true,
      registered: new Date('11/25/2016 14:30:00'),
      hide: true
    }
    ];
  }

  getData() {
    this.data = new Observable(observer => {
      setTimeout(() => {
        observer.next(1);
      }, 1000);

      setTimeout(() => {
        observer.next(2);
      }, 1000);

      setTimeout(() => {
        observer.next(3);
      }, 1000);

      setTimeout(() => {
        observer.next(4);
      }, 1000);
    });

    return this.data;
  }

  getUsers(): Observable<User[]> {
    return of(this.users);
  }

  addUser(user: User) {
    this.users.unshift(user);
  }

}
