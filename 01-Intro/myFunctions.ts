//First function to greet a user
function greetUser(name: string, address: string, mood?: boolean): string {
    if (mood === true) {
        return `Hello ${name} from ${address}. You seem to be in a good mood!`
    } else if (mood === false) {
        return `Hello ${name} from ${address}. You seem to be in a bad mood!`
    } else {
        return `Hello ${name} from ${address}. I hope you're having a good day!`
    }
}

console.log(greetUser("Habib", "Abuja", true))



//Second function to demonstrate default parameters and arrow functions
let loginUser = (name: string, email: string, password: string, isPaid: boolean = false): boolean => {
    if (name && email && password) {
        return true
    } else {
        return false
    }
}
loginUser("Habib", "habib@gmail.com", "12345@12", true)



//Third function to demonstrate return types
function addNum(num: number): number {
    return num + 5
}
let result: number
console.log(result = addNum(5))


//Fourth function to demonstrate return types of .map() with arrow functions.
let heroes = ["Superman", "Batman", "Flash", "Spiderman"]
heroes.map((hero): string => {
    return `Hero is ${hero}`
})

let heroPower = [100, 200, 300, 400]
heroPower.map((power): number => {
    return power + 100
})


//The never type represents the type of values that never occur. For example, a function that always throws an error or a function that never returns a value has a return type of never.
//A function that throws an error has a return type of never because it never successfully completes.
//A function that has an infinite loop also has a return type of never because it never reaches the end of its execution.

//Example of a function that throws an error
function handleError(errorMsg: string): never {
    throw new Error(errorMsg)
}

handleError("This is an error message")

// handleError("This is an error message")


export { }