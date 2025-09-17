"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function createCountry(name, capital) {
    return "Country created with name: ".concat(name, " and capital: ").concat(capital);
}
createCountry('Nigeria', 'Abuja'); //the func accepts two string parameters and returns a string
function createFood(_a) {
    var name = _a.name, price = _a.price;
    return "Food created with name: ".concat(name, " and price: ").concat(price);
}
createFood({ name: 'Pizza', price: 20 }); //the func accepts an object with name and price properties of type string and number respectively
function createCourse() {
    return { name: 'ReactJS', price: 100 };
}
console.log(createCourse());
function createUser(_a) {
    var name = _a.name, isPaid = _a.isPaid;
    return "User created with name: ".concat(name, " and isPaid: ").concat(isPaid);
}
createUser({ name: 'Habib', isPaid: true });
function addUser(_a) {
    var name = _a.name, email = _a.email, isPaid = _a.isPaid;
    return { name: name, email: email, isPaid: isPaid }; //the function takes in a User type object and returns a User type object
}
console.log(addUser({ name: 'Habib', email: 'h@gmail.com', isPaid: true }));
function createUser2(_a) {
    var name = _a.name, isPaid = _a.isPaid;
    return "User created with name: ".concat(name, " and isPaid: ").concat(isPaid);
}
console.log(createUser2({ name: 'Habib', email: 'myEmail@gmail.com', isPaid: true }));
var user1 = {
    _id: '123',
    name: 'Habib',
    email: 'myEmail@gmail.com',
    isActive: false,
    favFoods: ['Rice', 'Beans'] //This is allowed
};
//user1._id = '456'; //This is not allowed because _id is readonly
user1.name = 'Habibat'; //This is allowed
user1.favFoods.push('Yam'); //This is allowed eventhough favFoods is readonly because we are not changing the array itself but adding to it
// user1.favFoods = ['Rice', 'Beans', 'Yam']; //This is not allowed because we are changing the array itself
// user1.favFoods[0] = 'Yam'; //This is also not allowed because we are changing the array itself
console.log(user1);
var myCard = {
    cardNum: 123456789,
    cardData: '12/23',
    cvv: 123
};
console.log(myCard);
function getCoordinates(_a) {
    var x = _a.x, y = _a.y;
    console.log("X coordinate is: ".concat(x, " and Y coordinate is: ").concat(y));
}
getCoordinates({ x: '100', y: 200 }); //This is allowed
getCoordinates({ x: 100, y: 200 }); //This is also allowed
