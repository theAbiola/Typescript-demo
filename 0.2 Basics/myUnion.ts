//The Union type is useful when we don't know what datatype to expect. 
//It allows us to avoid using the 'any' datatype by specifying multiple types that a variable can hold.
//For example, a variable can be a string or a number.
//The pipe operator (|) is used to separate the types in a Union type.

let score: number | string = 33

score = 'thirty three'

type Player = {
    name: string;
    id: number;
}
type Admin = {
    username: string;
    id: number;
}

let Habib: Player | Admin = {
    name: 'Habib',
    id: 1
}

Habib = {
    username: 'Musa',
    id: 2
}

function getDBId(id: number | string) { //shows that this function can only accept a number or a string
    console.log(`DB ID is ${id}`);
}
getDBId(4);
getDBId('4');

function getIdType(id: number | string) {
    if (typeof id === 'number') {
        console.log('This is a number');
    } else if (typeof id === 'string') {
        console.log(id.toLowerCase());
    }
}

const data: (string | number)[] = ['Habib', 1, 'Musa', 2]; //shows that data can accept an array of a mixture of numbers and strings
console.log(data);

const data2: string[] | number[] = ['Habib', 'Musa', 'Sadiq']; //shows that data2 can only accept an array of strings or an array of numbers

let seatAllotment: 'aisle' | 'middle' | 'window' = 'aisle'; //shows that seatAllotment can only be either 'aisle', 'middle' or 'window'
//seatAllotment = 'side' //This is not allowed because 'side' is not part of the types that seatAllotment can be