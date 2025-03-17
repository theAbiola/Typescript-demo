function createUser({ name: string, isPaid: boolean }) { //what the function should accept

}
createUser({ name: 'Habib', isPaid: true });

function createCourse(): { name: string, price: number } { //what the function should return
    return { name: 'ReactJS', price: 100 };
}

//TYPE ALIAS
type User = { //creating our own type which is an object with the datatypes that we set inside it(TYPE ALIAS)
    name: string;
    email: string;
    isPaid: boolean;
}

function createUser2(user: User) {
    console.log(user);
}
createUser2({ name: 'Habib', email: 'myEmail@gmail.com', isPaid: true });


type newUser = {
    readonly _id: string; //readonly means the value cannot be changed
    name: string;
    email: string;
    isActive: boolean;
    readonly favFoods: string[]; //readonly means the value cannot be changed and the array can only contain strings
    creditCard?: number; //This is optional
}

let user1: newUser = {
    _id: '123',
    name: 'Habib',
    email: 'myEmail@gmail.com',
    isActive: false,
    favFoods: ['Rice', 'Beans'] //This is allowed
}

user1.name = 'Habibat'; //This is allowed
user1.favFoods.push('Yam'); //This is allowed eventhough favFoods is readonly because we are not changing the array itself but adding to it
// user1.favFoods = ['Rice', 'Beans', 'Yam']; //This is not allowed because we are changing the array itself
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

export { }