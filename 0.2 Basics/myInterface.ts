//interfaces are used to define the structure of an object

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