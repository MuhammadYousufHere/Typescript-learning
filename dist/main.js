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
let pupil = {
    id: 2,
    phone: 423423442,
    name: 'Yousuf',
    job: 'Programmer',
    retire: (dailyTask) => {
        console.log(dailyTask);
    }
};
function buyDairy(price, quantity) {
    if (typeof price === 'number')
        return price * quantity;
    else
        return parseInt(price) * quantity;
}
console.log(buyDairy('234', 2));
console.log(buyDairy(150, 3));
let aStudent = {
    read: () => { },
    write: () => { },
};
let amount = 250;
const saySomething = (talk) => {
    if (talk)
        return console.log(talk);
    else
        console.log('Say something..');
};
saySomething(null);
saySomething('You are awesome!');
let email = document.getElementById('email');
let Email = document.getElementById('email');
email.value;
function block() {
    while (true) {
    }
}
console.log('I,m not reachable');
//# sourceMappingURL=main.js.map