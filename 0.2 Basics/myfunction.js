"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//FIRST SECTION
function setToUpper(val) {
    console.log(val.toUpperCase());
}
setToUpper('hello world'); // HELLO WORLD
//SECOND SECTION
function addFirstNum(val) {
    return val + 2;
    // return "Hello world"
}
addFirstNum(5); // 7
//THIRD SECTION
function addSecondNum(val) {
    return val + 5;
    // return "Hello world"
}
var myVal = addSecondNum(5);
console.log(myVal); // 10
//FOURTH SECTION
var newUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
}; //we set isPaid's boolean value to false by default
newUser('Habib', 'habib@dev.com');
//FIFTH SECTION
var heroes = ['Superman', 'Batman', 'Falcon', 'Ironman', 'Spiderman'];
// let hero1 = heroes.map((hero): string --> This means the function should return a string
// let hero2 = heroes.map((hero: string) --> This means the function should accept a string
heroes.map(function (hero) {
    return "Hero is ".concat(hero);
});
//SIXTH SECTION
var consoleError = function (errMessage) {
    console.error(errMessage);
};
var throwError = function (errMessage) {
    throw new Error(errMessage);
};
var returnError = function (errMessage) {
    return errMessage;
};
