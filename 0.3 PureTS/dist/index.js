"use strict";
class User {
    constructor(name, email) {
        this.city = ''; //private means we can only access this property inside the User class declaration
        this.name = name;
        this.email = email;
        this.city;
    }
}
class User2 {
    constructor(name, email) {
        this.name = name;
        this.email = email;
        this.city = ''; //private means we can only access this property inside the User class declaration
    }
}
let firstUser = new User('Habib', 'h@a.com');
let secondUser = new User2('Biola', 'a@b.com');
//user1.city = 'Abuja' //this will throw an error because we set city property to readonly on line 4 above
