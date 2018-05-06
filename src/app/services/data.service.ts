import { Injectable } from '@angular/core';

import { User } from '../models/User'; 

@Injectable()
export class DataService {
  users: User[];

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

  getUsers(): User[] {
    console.log('fetch');
    return this.users;
  }

  addUser(user: User) {
    this.users.unshift(user);
  }

}
