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
