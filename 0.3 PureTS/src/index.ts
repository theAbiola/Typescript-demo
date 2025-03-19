class User {
    name: string;
    email: string;
    private readonly city: string = '' //private means we can only access this property inside the User class declaration
    constructor(name: string, email: string) {
        this.name = name;
        this.email = email;
        this.city
    }
}

class User2 {
    private readonly city: string = '' //private means we can only access this property inside the User class declaration
    constructor(
        public name: string,
        public email: string,
        //private city: string
    ) {
    }
}

let firstUser = new User('Habib', 'h@a.com');
let secondUser = new User2('Biola', 'a@b.com')
//user1.city = 'Abuja' //this will throw an error because we set city property to readonly on line 4 above