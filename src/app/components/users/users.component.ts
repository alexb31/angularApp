import { Component, OnInit } from '@angular/core';

import { User } from '../../models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[];
  showExtended: boolean = true;
  loaded: boolean = false;

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
          }
      },
      {
        firstName: 'Jane',
        lastName: 'Doe',
        age: 21,
        adress: {
            street: '50 street',
            city: 'Los Angeles',
            state: 'CA'
        }
      },
      {
        firstName: 'Jack',
        lastName: 'Frost',
        age: 26,
        adress: {
            street: '50 elm street',
            city: 'Detroit',
            state: 'MI'
        }
      }
      ];

      this.loaded = true;

      this.addUser({
        firstName: 'Jack',
        lastName: 'The Ripper',
        age: 55
      });

  }

  addUser(user: User) {
    this.users.push(user);
  }

}
