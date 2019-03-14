import { Component, OnInit } from '@angular/core';

import {User} from '../../models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: User[];

  constructor() { }

  ngOnInit() {
    this.users = [
      {
        firstName: 'Bob',
        lastName: 'Loblaw',
        age: 30,
        address: {
            street: '50 main street',
            city: 'Boston',
            state: 'MA'
        }
      },
      {
        firstName: 'John',
        lastName: 'Doe',
        age: 55,
        address: {
            street: '21 state street',
            city: 'New York',
            state: 'NY'
        }
      },
      {
        firstName: 'Mike',
        lastName: 'Jones',
        age: 44,
        address: {
            street: '22 jump street',
            city: 'Long Island',
            state: 'NY'
        }
      },
    ];

    this.addUser(      {
      firstName: 'Steve',
      lastName: 'Rogers',
      age: 87,
      address: {
          street: '29 jump street',
          city: 'Long Island',
          state: 'NY'
      }
    })
  }
  addUser(user: User){
    this.users.push(user);
  }

}
