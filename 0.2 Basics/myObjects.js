"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function createUser(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
createUser({ name: 'Habib', isPaid: true });
function createCourse() {
    return { name: 'ReactJS', price: 100 };
}
function createUser2(user) {
    console.log(user);
}
createUser2({ name: 'Habib', email: 'myEmail@gmail.com', isPaid: true });
var user1 = {
    _id: '123',
    name: 'Habib',
    email: 'myEmail@gmail.com',
    isActive: false,
    favFoods: ['Rice', 'Beans'] //This is allowed
};
user1.name = 'Habibat'; //This is allowed
user1.favFoods.push('Yam'); //This is allowed eventhough favFoods is readonly because we are not changing the array itself but adding to it
// user1.favFoods = ['Rice', 'Beans', 'Yam']; //This is not allowed because we are changing the array itself
console.log(user1);
