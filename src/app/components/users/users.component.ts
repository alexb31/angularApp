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
          image: "http://lorempixel.com/600/600/people/3/",
          isActive: true
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
        image: "http://lorempixel.com/600/600/people/2/",
        isActive: false
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
        image: "http://lorempixel.com/600/600/people/1/"
      }
      ];

      this.loaded = true;

      // this.addUser({
      //   firstName: 'Jack',
      //   lastName: 'The Ripper',
      //   age: 55
      // });

      this.setCurrentClasses();

  }

  addUser(user: User) {
    this.users.push(user);
  }

  setCurrentClasses() {
    this.currentClasses = {
      'btn-success': this.enableAdd,
      'big-text': this.showExtended
    }
  }

}
