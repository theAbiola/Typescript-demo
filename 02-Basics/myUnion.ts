//The Union type is useful when we don't know what datatype to expect. 
//It allows us to avoid using the 'any' datatype by specifying multiple types that a variable can hold.
//For example, a variable can be either a string or a number.
//The pipe symbol (|) is used to separate the types in a Union type.




//1. SIMPLE UNION TYPE EXAMPLES
type ScoreType = number | string

let score: ScoreType = 33

score = '33'

type Player = {
    name: string;
    id: number;
}
type Admin1 = {
    username: string;
    id: number;
}

let Habib: Player | Admin1 = {
    name: 'Habib',
    id: 1
}

Habib = {
    username: 'Habib',
    id: 2
}




//2. UNION TYPES WITH FUNCTIONS
function getDBId(id: number | string) { //shows that this function can only accept a number or a string
    console.log(`DB ID is ${id}`);
}
getDBId(4);
getDBId('4');

function getIdType(id: number | string) {
    if (typeof id === 'string') {
        console.log(id.toLowerCase());
    } else if (typeof id === 'number') {
        console.log(id + 5);
    }
}




//3. UNION TYPES WITH ARRAYS
let data0: number[] = [1, 2, 3, 4]; //shows that data0 can only accept an array of numbers
let data1: string[] = ['Habib', 'Kirki', 'Vito']; //shows that data1 can only accept an array of strings

//let data0 = [1, 'Habib', 2, 'Kirki']; //This is not allowed because data0 can only accept an array of numbers
//let data1 = ['Habib', 2, 'Kirki', 4]; //This is not allowed because data1 can only accept an array of strings

const data: (string | number)[] = ['Habib', 'Musa', 2, 4]; //shows that data can accept an array of a mixture of numbers and strings
console.log(data);

let data2: string[] | number[] = ['Habib', 'Musa', 'Sadiq']; //shows that data2 can only accept an array of strings or only an array of numbers
data2 = [1, 2, 3, 4]; //This is allowed
//data2 = ['Habib', 1, 'Musa', 2]; //This is not allowed because data2 can only accept an array of strings or only an array of numbers




//4. LITERAL TYPES
//Literal types are used to specify that a variable can only hold a specific value or set of values.
//For example, a variable can be either 'aisle', 'middle' or 'window'.
//This is useful when we want to restrict the values that a variable can hold.
let seatAllotment: 'aisle' | 'middle' | 'window' = 'aisle'; //shows that seatAllotment can only be either 'aisle', 'middle' or 'window'
//seatAllotment = 'side' //This is not allowed because 'side' is not part of the literal types that seatAllotment can be.