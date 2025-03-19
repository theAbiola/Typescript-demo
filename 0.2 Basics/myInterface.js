//interfaces are used to define the structure of an object that we want to use in multiple places
//They are a bit similar to type aliases but they are more flexible bcus they allow us to use functions as their values
var user1 = {
    id: 1,
    name: 'Habib',
    email: 'ah@email.com',
    isActive: false,
    startTrial: function () {
        return 'Trial started';
    },
    getCoupon: function (couponName, value) {
        return 'You have applied' + couponName + 'coupon for' + value + '% off';
    },
    adminToken: "This is a test token for the admin"
};
console.log(user1.startTrial());
console.log(user1.getCoupon('Freebie', 10));
var admin1 = {
    id: 2,
    name: 'Habib',
    role: 'admin',
    email: 'admin@email.com',
    isActive: true,
    startTrial: function () {
        return 'Trial started';
    },
    getCoupon: function (couponName, value) {
        return 'You have applied' + couponName + 'coupon for' + value + '% off';
    },
    adminToken: "This is a test token for the admin"
};
