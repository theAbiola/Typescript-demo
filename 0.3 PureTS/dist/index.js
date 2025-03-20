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
        this.city = 'Abidjan'; //private means we can only access this property inside the User class declaration
    }
}
let firstUser = new User('Habib', 'h@a.com');
let secondUser = new User2('Biola', 'a@b.com');
//user1.city = 'Abuja' //this will throw an error because we set city property to readonly on line 4 above
