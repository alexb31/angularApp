import  { Component } from '@angular/core';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css']
})

export class UserComponent {
    firstName: string;
    lastName: string;
    age: number;
    adress;

    foo: any;
    hasKids: boolean;
    numberArray: number[];
    mixedArray: any[];
    myTuple: [string, number, boolean];
    unusable: void;
    u: undefined;

    constructor() {
        this.firstName = 'John';
        this.lastName = 'Doe';
        this.age = 30;
        this.adress = {
            street: '50 main street',
            city: 'Boston',
            state: 'MA' 
        }

        this.foo = true;
        this.hasKids = true;
        this.numberArray = [1, 2, 3];
        console.log(this.addNumbers(5, 3));
    }

    showAge() {
        return this.age + 2;
    }

    addNumbers(num1: number, num2: number) {
        return num1 + num2;
    }
}