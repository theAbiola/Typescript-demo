//interfaces are used to define the structure of an object that we want to use in multiple places
//They are a bit similar to type aliases but they are more flexible bcus they allow us to use functions as their values

interface User {
    readonly id: number,
    name: string,
    email: string,
    isActive: boolean,
    googleId?: string //Question mark means it is optional
    startTrial: () => string; //Notice how we can use either a comma or a semicolon to separate the properties
    //starTrial(): string //This is another way to write the function
    getCoupon(couponName: string, value: number): string
}

//REOPENING THE INTERFACE TO ADD MORE VALUES
interface User {
    adminToken: string; //We can add more properties to the interface even if we declared the interface object in line 4 above
}

let user1: User = {
    id: 1,
    name: 'Habib',
    email: 'ah@email.com',
    isActive: false,
    startTrial: () => {
        return 'Trial started'
    },
    getCoupon: (couponName: 'Freebie', value: 10) => {
        return 'You have applied' + couponName + 'coupon for' + value + '% off'
    },
    adminToken: "This is a test token for the admin"
}

console.log(user1.startTrial());
console.log(user1.getCoupon('Freebie', 10));
// user1.id = 2; //This is not allowed because id is readonly


//EXTENDING THE INTERFACE
interface Admin extends User { //extending an interface means that we create another inteface that has the properties of that interface and we can add peculiar properties to the new interface
    role: 'admin' | 'superadmin'
}

let admin1: Admin = {
    id: 2,
    name: 'Habib',
    role: 'admin',
    email: 'admin@email.com',
    isActive: true,
    startTrial: () => {
        return 'Trial started'
    },
    getCoupon: (couponName: 'Freebie', value: 10) => {
        return 'You have applied' + couponName + 'coupon for' + value + '% off'
    },
    adminToken: "This is a test token for the admin"
}