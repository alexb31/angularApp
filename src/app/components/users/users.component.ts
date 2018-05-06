import { Component, OnInit, ViewChild } from '@angular/core';

import { User } from '../../models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  user: User = {
    firstName: '',
    lastName: '',
    email: ''
  }
  users: User[];
  showExtended: boolean = true;
  loaded: boolean = false;
  enableAdd: boolean = false;
  showUserForm: boolean  = false;
  @ViewChild('userFrom') form: any;

  constructor() { }

  ngOnInit() {
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

      this.loaded = true;
  }

  onSubmit({value, valid}: {value: User, valid: boolean}) {
    if(!valid){
      console.log('Form is not valid')
    } else {
      value.isActive = true;
      value.registered = new Date();
      value.hide = true;

      this.users.unshift(value);

      this.form.reset();
    }
  }

  fireEvent(e) {
    console.log(e.type);
    console.log(e.target.value);
  }
}
