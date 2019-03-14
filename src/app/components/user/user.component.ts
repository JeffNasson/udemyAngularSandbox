import {Component, OnInit} from '@angular/core'

import {User} from '../../models/User';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls:['./user.component.css']
})

export class UserComponent implements OnInit {
    // Properties
    user: User;

    // Methods
    constructor(){
    }

    ngOnInit(){
        this.user = {
            firstName: 'Bob',
            lastName: 'Loblaw',
            age: 30,
            address: {
                street: '50 main street',
                city: 'Boston',
                state: 'MA'
            }
        }
    }
}



