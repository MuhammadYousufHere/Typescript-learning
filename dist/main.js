"use strict";
let age = 23;
let nameIs = 'Asim';
let isStudent = true;
console.log(`This is ${nameIs}, he is ${age}. Is he Student? ${isStudent}.`);
let animals = ['Lion', 'Cat', 'Elephant'];
let ids = [1, 3, 4];
let myTuple = [2, 'Ammar'];
const phoneNum = 12342342;
const phoneTwo = 533442;
const phoneThree = 72345342;
var Contact;
(function (Contact) {
    Contact[Contact["Home"] = 3234424242] = "Home";
    Contact[Contact["Office"] = 424224241] = "Office";
    Contact[Contact["Mobile"] = 24234422342] = "Mobile";
})(Contact || (Contact = {}));
let hisMobNumber = Contact.Mobile;
console.log(hisMobNumber);
const increasePay = (salary, paysTax, basicPay = 15000) => {
    if (salary < 30000 && (paysTax || 1600) > 1600 && basicPay < 15000)
        return salary + 2500;
    return salary;
};
console.log(increasePay(27232, 1000, 20000));
console.log(increasePay(24434, 2000, 19000));
const student = {
    id: 12,
    phone: 1234342242,
    name: 'Asim',
    retire: (dailyTask) => {
        console.log(dailyTask);
    },
};
console.log(student);
//# sourceMappingURL=main.js.map