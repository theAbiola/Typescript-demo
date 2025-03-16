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
    isActive: false
};
console.log(user1);
