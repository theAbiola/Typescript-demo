//tuples mean that we can define an array with a fixed number of elements and types
//Being fixed means that the input data must follow the order of the types and the number of elements in the tuple
//For example, if we define a tuple as [string, number, boolean], the input data must follow this order and have exactly 3 elements
//The three elements must be a string, a number and a boolean in that order
var myData = ['Habib', 1, true]; //This is a tuple
var rgb = [255, 125, 150]; //This is a tuple
var person1 = [1, 'Habib', 'myemail@mail.com']; //This is a tuple
person1[1] = 'Habibat'; //This is allowed
//tuples have an issue with the push method because it can change the order of the elements in the tuple
/*Example:*/ person1.push(40); //This shouldn't be allowed bcus it would mean that we are changing the order of the elements in the tuple that we set in the 'Person' type alias
console.log(person1);
