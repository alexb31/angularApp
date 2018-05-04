import { Component, OnInit } from '@angular/core';

import { User } from '../../models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[];
  showExtended: boolean = false;
  loaded: boolean = false;
  enableAdd: boolean = true;
  currentClasses: {};
  currentStyles: {};

  constructor() { }

  ngOnInit() {
      this.users = [
        {
          firstName: 'John',
          lastName: 'Doe',
          age: 23,
          adress: {
              street: '50 main street',
              city: 'Boston',
              state: 'MA'
          },
          isActive: true,
          registered: new Date('12/12/2018 08:30:00')
      },
      {
        firstName: 'Jane',
        lastName: 'Doe',
        age: 21,
        adress: {
            street: '50 street',
            city: 'Los Angeles',
            state: 'CA'
        },
        isActive: false,
        registered: new Date('01/02/2018 08:30:00')
      },
      {
        firstName: 'Jack',
        lastName: 'Frost',
        age: 26,
        adress: {
            street: '50 elm street',
            city: 'Detroit',
            state: 'MI'
        },
        isActive: true,
        registered: new Date('11/25/2016 14:30:00')
      }
      ];

      this.loaded = true;
  }

  addUser(user: User) {
    this.users.push(user);
  }

  fireEvent(e) {
    console.log(e.type);
  }
}
