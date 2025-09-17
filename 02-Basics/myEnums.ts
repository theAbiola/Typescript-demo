//ENUM stands for Enumerated Types
//Enums are a way to define a set of named constants i.e. a collection of related values that can be numeric or string values
//Enums are defined using the 'enum' keyword
//Enums are useful when we want to restrict users to select only from a given set of values.
//For example, if we want to restrict users to select only from a set of colors, we can use an enum


//FIRST SECTION
enum SeatType {
    WINDOW, //Notice how we use a comma to separate the values unlike in object type alias where we use a semi colon
    AISLE,
    MIDDLE
}
let userSeat: SeatType = SeatType.WINDOW; //This is how we can assign a value from the enum to a variable
console.log(userSeat); //This would log '0' because enums are zero-based by default


//SECOND SECTION
enum SeatType2 {
    WINDOW = 100, //We can also assign values to the enum values
    AISLE = 200,
    MIDDLE = 300
}
let userSeat2: SeatType2 = SeatType2.WINDOW;
console.log(userSeat2); //This would log '100' because we assigned a value to the 'window' enum value


//THIRD SECTION
enum SeatType3 {
    WINDOW = 'W', //We can also assign string values to the enum values
    AISLE = 'A',
    MIDDLE = 'M'
}
let userSeat3: SeatType3 = SeatType3.WINDOW;
console.log(userSeat3); //This would log 'W' because we assigned a string value to the 'window' enum value


//FOURTH SECTION
enum SeatType4 {
    WINDOW = 'Window', //We can assign either strings or number values to the enum values
    AISLE = 40,
    MIDDLE = 'Middle'
}
let userSeat4: SeatType4 = SeatType4.AISLE;
console.log(userSeat4); //This would log '40' because we assigned a number value to the 'aisle' enum value