//Tuples mean that we can define an array with a fixed number of elements and types.
//Being fixed means that the input data must follow the order of the types and the number of elements in the tuple.
//For example, if we define a tuple as [string, number, boolean], the input data must follow this order and have exactly 3 elements.
//The three elements must be a string, a number and a boolean in that order.

//How to make sense of tuples is that the types are put inside the square bracket. they are then separated by a comma so it looks like an actual array.
//So basically, a Tuple is an array of Types. The variables or values that would obey this Tuple structure must follow the positioning of the types in the array. 
let myData: [string, number, boolean] = ['Habib', 1, true]; //This is a tuple

let rgb: [number, number, number] = [255, 125, 150]; //This is a tuple

type Person = [number, string, string]; //This is a type alias for a tuple

let person1: Person = [1, 'Habib', 'myemail@mail.com']; //This is a tuple
//person1[1] = 4 //This is not allowed
person1[1] = 'Habibat'; //This is allowed

//tuples have an issue with the push method because it can change the order of the elements in the tuple
/*Example:*/ person1.push(40) //Although allowed, this shouldn't be allowed bcus it would mean that we are changing the type of element and also the structure of the tuple that we set in the 'Person' type alias above.
console.log(person1);