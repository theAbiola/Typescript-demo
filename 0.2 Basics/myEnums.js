//ENUM stands for Enumerated Types
//Enums are a way to define a set of named constants i.e. a collection of related values that can be numeric or string values
//Enums are defined using the 'enum' keyword
//Enums are useful when we want to restrict users to select only from a given set of values.
//For example, if we want to restrict users to select only from a set of colors, we can use an enum
//FIRST SECTION
var SeatType;
(function (SeatType) {
    SeatType[SeatType["window"] = 0] = "window";
    SeatType[SeatType["aisle"] = 1] = "aisle";
    SeatType[SeatType["middle"] = 2] = "middle";
})(SeatType || (SeatType = {}));
var userSeat = SeatType.window; //This is how we can assign a value from the enum to a variable
console.log(userSeat); //This would log '0' because enums are zero-based by default
//SECOND SECTION
var SeatType2;
(function (SeatType2) {
    SeatType2[SeatType2["window"] = 100] = "window";
    SeatType2[SeatType2["aisle"] = 200] = "aisle";
    SeatType2[SeatType2["middle"] = 300] = "middle";
})(SeatType2 || (SeatType2 = {}));
var userSeat2 = SeatType2.window;
console.log(userSeat2); //This would log '100' because we assigned a value to the 'window' enum value
//THIRD SECTION
var SeatType3;
(function (SeatType3) {
    SeatType3["window"] = "W";
    SeatType3["aisle"] = "A";
    SeatType3["middle"] = "M";
})(SeatType3 || (SeatType3 = {}));
var userSeat3 = SeatType3.window;
console.log(userSeat3); //This would log 'W' because we assigned a string value to the 'window' enum value
//FOURTH SECTION
var SeatType4;
(function (SeatType4) {
    SeatType4["window"] = "Window";
    SeatType4[SeatType4["aisle"] = 40] = "aisle";
    SeatType4["middle"] = "Middle";
})(SeatType4 || (SeatType4 = {}));
var userSeat4 = SeatType4.aisle;
console.log(userSeat4); //This would log '40' because we assigned a number value to the 'aisle' enum value
