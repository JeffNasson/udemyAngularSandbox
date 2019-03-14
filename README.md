
// BEGIN PROPERTIES AND METHODS
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
    unusable: void;
    u: undefined;
    n: null;

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
        this.myTuple = ['Bobs', 57, false,'an extra value']
        this.unusable=undefined;
        this.u = undefined;
        this.n = null;
        console.log(this.addNumbers(2,3))
    }

    sayHello(){
        console.log(`Hello ${this.firstName}`)
    }

    hasBirthday(){
        this.age += 1;
    }

    addNumbers(num1: number,num2: number): number{
        return num1 + num2
    }
}

// END PROPERTIES AND METHODS