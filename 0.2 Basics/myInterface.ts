//interfaces are used to define the structure of an object that we want to use in multiple places
//They are a bit similar to type aliases but they are more flexible bcus they allow us to use functions as their values

interface User {
    id: number,
    name: string,
    email: string,
    isActive: boolean,
    googleId?: string //Question mark means it is optional
    startTrial: () => string,
    //starTrial(): string //This is another way to write the function
    getCoupon(couponName: string, value: number): string
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
    }
}