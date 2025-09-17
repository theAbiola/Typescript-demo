//Annotation is basically telling the compiler what type of value a variable will hold. e.g. let x: number = 10 (`number` is the annotation here)
//Inference is when the compiler automatically infers the type of value a variable will hold


//String
let greetings: string = "Hello Habib"
console.log(greetings)


//Number: type inference
let userId = 33445.6
console.log(userId)


//Boolean
let isLoggedin: boolean = false

let isCool: boolean = true


//Null
let empty: null;


//Any
//notice that we didn't give any type annotation to the variable hero. So, by default it is of type 'any'
let hero;

function getHero() {
    return "Thor"
}
//TS still infers the type of hero as 'any' here bcus we didn't give a type annotation to it when we declared it. TS looks at the type of the variable at declaration.
hero = getHero()
console.log(hero)

let myNum: number = 10;

greetings.toLowerCase()

export { } 