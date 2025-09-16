class User {
    name: string;
    email: string;
    private readonly city: string = 'Abuja' //private means we can only access this property inside the User class declaration, readonly means we can only read its value
    constructor(name: string, email: string) {
        this.name = name;
        this.email = email;
        this.city
    }
}


//EASIER METHOD OF WRITING THE CLASS TO AVOID USING THE 'This' KEYWORD
class User2 {

    private _courseCount = 1

    private readonly city: string = 'Abidjan' //private means we can only access this property inside the User class declaration
    constructor(
        public name: string, //all values are set to public by default but we use it here to 
        public email: string,
        //private userId: string
    ) {
    }

    private deleteToken() {
        console.log('Token Deleted');
    }

    get getAppleEmail(): string {
        return `apple${this.email}`
    }

    get courseCount(): number {
        return this._courseCount
    }

    //set courseCount(courseNum): void { //This would return an error because a 'set' accessor cannot have a type annotation

    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error('The course count should be more than 1')
        }
        this._courseCount = courseNum
    }
}

let firstUser = new User('Habib', 'h@a.com');
let secondUser = new User2('Biola', 'a@b.com')
//firstUser.city = 'Lagos' //this will throw an error because we set city property to readonly on line 4 above