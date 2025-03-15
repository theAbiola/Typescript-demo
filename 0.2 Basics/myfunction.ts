//FIRST SECTION
function setToUpper(val: string) {
    console.log(val.toUpperCase());
}

setToUpper('hello world'); // HELLO WORLD


//SECOND SECTION
function addFirstNum(val: number) { //This function does not specify the type of value to be returned so `return "Hello world"` does not give an error
    return val + 2;
    // return "Hello world"
}
addFirstNum(5); // 7


//THIRD SECTION
function addSecondNum(val: number): number { //This function specifies the type of value to be returned so `return "Hello world"` gives an error
    return val + 5;
    // return "Hello world"
}
let myVal = addSecondNum(5);
console.log(myVal); // 10


//FOURTH SECTION
let newUser = (name: string, email: string, isPaid: boolean = false) => { } //we set isPaid's boolean value to false by default

newUser('Habib', 'habib@dev.com')


//FIFTH SECTION
let heroes = ['Superman', 'Batman', 'Falcon', 'Ironman', 'Spiderman'];

// let hero1 = heroes.map((hero): string --> This means the function should return a string

// let hero2 = heroes.map((hero: string) --> This means the function should accept a string

heroes.map((hero): string => {
    return `Hero is ${hero}`;
})

//SIXTH SECTION
let consoleError = (errMessage: string): void => { //The void keyword tells us that the function does not return anything even though we used console.error
    console.error(errMessage);
}

let throwError = (errMessage: string): never => { //The never keyword tells us that the function never returns a value. It's best practice
    throw new Error(errMessage);
}

let returnError = (errMessage: string): string => {
    return errMessage;
}
export { }