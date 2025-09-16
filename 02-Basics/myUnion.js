//The Union type is useful when we don't know what datatype to expect. 
//It allows us to avoid using the 'any' datatype by specifying multiple types that a variable can hold.
//For example, a variable can be a string or a number.
//The pipe operator (|) is used to separate the types in a Union type.
var score = 33;
score = 'thirty three';
var Habib = {
    name: 'Habib',
    id: 1
};
Habib = {
    username: 'Musa',
    id: 2
};
function getDBId(id) {
    console.log("DB ID is ".concat(id));
}
getDBId(4);
getDBId('4');
function getIdType(id) {
    if (typeof id === 'number') {
        console.log('This is a number');
    }
    else if (typeof id === 'string') {
        console.log(id.toLowerCase());
    }
}
var data = ['Habib', 1, 'Musa', 2]; //shows that data can accept an array of a mixture of numbers and strings
console.log(data);
var data2 = ['Habib', 'Musa', 'Sadiq']; //shows that data2 can only accept an array of strings or an array of numbers
var seatAllotment = 'aisle'; //shows that seatAllotment can only be either 'aisle', 'middle' or 'window'
//seatAllotment = 'side' //This is not allowed because 'side' is not part of the types that seatAllotment can be
