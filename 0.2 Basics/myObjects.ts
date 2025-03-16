function createUser({ name: string, isPaid: boolean }) { //what the function should accept

}
createUser({ name: 'Habib', isPaid: true });

function createCourse(): { name: string, price: number } { //what the function should return
    return { name: 'ReactJS', price: 100 };
}

//TYPE ALIAS
type User = { //creating our own type which is an object with the datatypes that we set inside it(TYPE ALIAS)
    name: string;
    email: string;
    isPaid: boolean;
}

function createUser2(user: User) {
    console.log(user);
}
createUser2({ name: 'Habib', email: 'myEmail@gmail.com', isPaid: true });


type newUser = {
    readonly _id: string; //readonly means the value cannot be changed
    name: string;
    email: string;
    isActive: boolean;
}

let user1: newUser = {
    _id: '123',
    name: 'Habib',
    email: 'myEmail@gmail.com',
    isActive: false
}

console.log(user1);
export { }