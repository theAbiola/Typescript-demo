
function createCountry(name: string, capital: string): string {
    return `Country created with name: ${name} and capital: ${capital}`;
}

createCountry('Nigeria', 'Abuja'); //the func accepts two string parameters and returns a string






function createFood({ name, price }: { name: string, price: number }) {
    return `Food created with name: ${name} and price: ${price}`;
}

createFood({ name: 'Pizza', price: 20 }); //the func accepts an object with name and price properties of type string and number respectively






function createCourse(): { name: string, price: number } { //what the function should return
    return { name: 'ReactJS', price: 100 };
}

console.log(createCourse());







//TYPE ALIAS
type User = { //creating our own type which is an object with the datatypes that we set inside it(TYPE ALIAS)
    name: string;//notice how we use a semi colon at the end of each entry since we are defining an object type alias
    email?: string;
    isPaid: boolean;
}

function createUser({ name, isPaid }: User): string {
    return `User created with name: ${name} and isPaid: ${isPaid}`;
}
createUser({ name: 'Habib', isPaid: true });







function addUser({ name, email, isPaid }: User): User {
    return { name, email, isPaid }; //the function takes in a User type object and returns a User type object
}

console.log(addUser({ name: 'Habib', email: 'h@gmail.com', isPaid: true }));







function createUser2({ name, isPaid }: User) {
    return `User created with name: ${name} and isPaid: ${isPaid}`;
}
console.log(createUser2({ name: 'Habib', email: 'myEmail@gmail.com', isPaid: true }));







type NewUser = {
    readonly _id: string; //readonly means the value cannot be changed
    name: string;
    email: string;
    isActive: boolean;
    readonly favFoods: string[]; //readonly means the value cannot be changed and the array can only contain strings
    creditCard?: number; //This is optional. It means that the creditCard property is not compulsory
}

let user1: NewUser = {
    _id: '123',
    name: 'Habib',
    email: 'myEmail@gmail.com',
    isActive: false,
    favFoods: ['Rice', 'Beans'] //This is allowed
}

//user1._id = '456'; //This is not allowed because _id is readonly
user1.name = 'Habibat'; //This is allowed
user1.favFoods.push('Yam'); //This is allowed eventhough favFoods is readonly because we are not changing the array itself but adding to it
// user1.favFoods = ['Rice', 'Beans', 'Yam']; //This is not allowed because we are changing the array itself
// user1.favFoods[0] = 'Yam'; //This is also not allowed because we are changing the array itself
console.log(user1);







type CardNumber = {
    cardNum: number;
}
type CardDetails = {
    cardData: string;
}
type Card = CardNumber & CardDetails & {
    cvv: number;
}; //This is an intersection type we use the & to combine the types

let myCard: Card = {
    cardNum: 123456789,
    cardData: '12/23',
    cvv: 123
}
console.log(myCard);







type Point = {
    x: number | string; //x can be a number or a string
    y: number;
}

function getCoordinates({ x, y }: Point) {
    console.log(`X coordinate is: ${x} and Y coordinate is: ${y}`);
}
getCoordinates({ x: '100', y: 200 }); //This is allowed
getCoordinates({ x: 100, y: 200 }); //This is also allowed
// getCoordinates({ x: true, y: 200 }); //This is not allowed because x can only be a number or a string







export { }