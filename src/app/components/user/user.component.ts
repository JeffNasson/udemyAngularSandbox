import {Component} from '@angular/core'

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls:['./user.component.css']
})

export class UserComponent {
    // Properties
    firstName: string;
    lastName: string;
    age: number;
    address: object;
    foo: any;
    hasKids: boolean;
    numberArray: number[]; // expects an array of numbers
    stringArray: string[]; // expects an array of strings
    anyArray: any[]; // allows any value inside of the array 
    myTuple: [string, number, boolean] //the first values defined must match, for example index 0,1,2 must be a string, number, then boolean. However all values after that are of the any type

    // Methods
    constructor(){
        this.firstName = 'Bob'
        this.lastName = 'Loblaw'
        this.age = 30;

        this.address = {
            street: '50 main street',
            city: 'Boston',
            state: 'MA'
        }
        
        this.hasKids = true
        this.foo = true
        this.numberArray = [1,2,3]
        this.stringArray = ['an','array','of','strings']
        this.anyArray = ['an array of any values', 56, true, undefined, ['cats',42]]
        this.myTuple = ['Bobs', 57, false]
    }

    sayHello(){
        console.log(`Hello ${this.firstName}`)
    }

    hasBirthday(){
        this.age += 1;
    }
}