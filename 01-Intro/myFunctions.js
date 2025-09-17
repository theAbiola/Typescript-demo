"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//First function to greet a user
function greetUser(name, address, mood) {
    if (mood === true) {
        return "Hello ".concat(name, " from ").concat(address, ". You seem to be in a good mood!");
    }
    else if (mood === false) {
        return "Hello ".concat(name, " from ").concat(address, ". You seem to be in a bad mood!");
    }
    else {
        return "Hello ".concat(name, " from ").concat(address, ". I hope you're having a good day!");
    }
}
console.log(greetUser("Habib", "Abuja", true));
//Second function to demonstrate default parameters and arrow functions
var loginUser = function (name, email, password, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
    if (name && email && password) {
        return true;
    }
    else {
        return false;
    }
};
loginUser("Habib", "habib@gmail.com", "12345@12", true);
//Third function to demonstrate return types
function addNum(num) {
    return num + 5;
}
var result;
console.log(result = addNum(5));
//Fourth function to demonstrate return types of .map() with arrow functions.
var heroes = ["Superman", "Batman", "Flash", "Spiderman"];
heroes.map(function (hero) {
    return "Hero is ".concat(hero);
});
var heroPower = [100, 200, 300, 400];
heroPower.map(function (power) {
    return power + 100;
});
function handleError(errorMsg) {
    throw new Error(errorMsg);
}
handleError("This is an error message");
