// Fundamentals

// Annotation

let age: number = 23;
let nameIs: string = 'Asim';
let isStudent: boolean = true;
console.log(`This is ${nameIs}, he is ${age}. Is he Student? ${isStudent}.`);

// You actually don't need to apply anotation TS going to do it for you.

// Arrays

let animals: string[] = ['Lion', 'Cat', 'Elephant'];
let ids: number[] = [1, 3, 4];

// Tuples
// Fixed length array : must be two elem

let myTuple: [number, string] = [2, 'Ammar'];

// Enum
// list of related constants

const phoneNum = 12342342;
const phoneTwo = 533442;
const phoneThree = 72345342;

// PascalCase Convention
// for better readablity place underscore if you wish (numbers only)
enum Contact {
    Home = 3234_424_242,
    Office = 424_224_241,
    Mobile = 242_3442_2342,
}

let hisMobNumber: Contact = Contact.Mobile;
console.log(hisMobNumber);

// Functions
//  ?  undefined arg
const increasePay = (
    salary: number,
    paysTax?: number,
    basicPay = 15_000
): number => {
    // default
    if (salary < 30_000 && (paysTax || 1600) > 1600 && basicPay < 15000)
        return salary + 2500;
    return salary;
};

console.log(increasePay(27232, 1000, 20000));
console.log(increasePay(24434, 2000, 19000));
// console.log(increasePay(31000))

// Objects

const student: {
    readonly id: number;
    phone: number;
    name: string;
    job?: string;
    retire: (dailyTask: string) => void;
} = {
    id: 12,
    phone: 123_4342_242,
    name: 'Asim',
    retire: (dailyTask: string) => {
        console.log(dailyTask);
    },
};


console.log(student)

// 

// Advanced types

// 1 - type

type Student = {
    readonly id: number;
    phone: number;
    name: string;
    job?: string;
    retire: (dailyTask: string) => void;
}

let pupil:Student ={
id:2,
phone:4234_234_42,
name:'Yousuf',
job:'Programmer',
retire: (dailyTask)=>{
console.log(dailyTask)
}

}

// 2 - Union
// union of two types or more - [ | ]

function buyDairy(price: number | string, quantity: number) {
    if(typeof price === 'number')
     return price * quantity

     else 
      return parseInt(price) * quantity
}

console.log(buyDairy('234', 2))
console.log(buyDairy(150, 3))


// 3 - Intersection 
// Object - number and string at the same timr - [ & ]
// ex - 
type canRead = {
    read : ()=> void
}
type canWrite = {
    write : ()=> void
}

type Learner =  canRead & canWrite;

let aStudent: Learner = {
    read: ()=> {},
    write: ()=> {},
}

// 4 - Literal types
// exact or specific (any data type can be used)
type Product = 'Milk' | 'Yogurt'
type Amout = 230 | 250
let amount: Amout = 250; 

// 5 - Nullable

// we can negotiate with null using union type , by default null is disliked bt TS

const saySomething = (talk:string | null) =>{
     if (talk) 
     return console.log(talk)
     else 
      console.log('Say something..')
}
saySomething(null)
saySomething('You are awesome!')

// 6 - Type asserstion
// when you know more about type of an object
//  as - not a type coversion but telling ts about an object/varialbe
// ex: 

// let email = document.getElementById('email') as HTMLInputElement;
// or
// let Email = <HTMLInputElement> document.getElementById('email');

// email.value


// 8 - Unknown typw

// perferred over any type

// const dance(document: any)=> {
//     document.fly()
// }
// const dance(document: unknown)=> {
//     document.fly()
// }

// 9 - never type

function  block() : never {
    while(true){
        // dance
    }
}

console.log('I,m not reachable')


// Section -3 
// Object-Oriented

class Teacher {
    // read only
   readonly id:number;
    name:string;
    subject:string;
    teachesClass:string;
    // optional
    teacherOtherSubject?: string
    // you could also make properties private./public 
    // i.e grant access to certain prop/method to be accessible from
    // outside or not.
    private _personalShelf: string
    constructor(id:number, name:string, subject:string,teachesClass:string, personalShelf:string){

            this.id = id;
            this.name =name;
            this.subject= subject;
            this.teachesClass = teachesClass
            this._personalShelf = personalShelf

        }
     teach( hours: number, present:boolean): void {
            if( present == true) {
                console.log(`Mr. ${this.name} teaches to ${this.teachesClass} students for ${hours} hours.`)
            }
     }
     keepsDoc () {
        console.log(`Mr ${this.name} keeps his docs in his ${this._personalShelf}.`)

     }   
}

let teacher = new Teacher(1, 'Muhammad Yousuf', 'javaScript', 'CS' ,'Locker')

console.log(teacher.teach(2, true))
console.log(teacher)
console.log(typeof teacher)
console.log(teacher instanceof Teacher )
console.log(teacher.keepsDoc())