"use strict";
class User {
    constructor(name, email) {
        this.city = 'Abuja'; //private means we can only access this property inside the User class declaration, readonly means we can only read its value
        this.name = name;
        this.email = email;
        this.city;
    }
}
//EASIER METHOD OF WRITING THE CLASS TO AVOID USING THE 'This' KEYWORD
class User2 {
    constructor(name, //all values are set to public by default but we use it here to 
    email) {
        this.name = name;
        this.email = email;
        this._courseCount = 1;
        this.city = 'Abidjan'; //private means we can only access this property inside the User class declaration
    }
    deleteToken() {
        console.log('Token Deleted');
    }
    get getAppleEmail() {
        return `apple${this.email}`;
    }
    get courseCount() {
        return this._courseCount;
    }
    //set courseCount(courseNum): void { //This would return an error because a 'set' accessor cannot have a type annotation
    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error('The course count should be more than 1');
        }
        this._courseCount = courseNum;
    }
}
let firstUser = new User('Habib', 'h@a.com');
let secondUser = new User2('Biola', 'a@b.com');
//user1.city = 'Abuja' //this will throw an error because we set city property to readonly on line 4 above
