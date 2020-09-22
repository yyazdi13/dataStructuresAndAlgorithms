export {}
let message = 'Goodbye World';
console.log(message);

let isBeginner: boolean = true;
let total: number = 0;
let name: string = 'Meep';
let sentence: string = `My name is ${name} 
I am a beginner at TypeScript`;

let n: null = null;
let u: undefined = undefined;

let isNew: boolean = null;
let myName: string = undefined;

// here's 2 ways of declaring and array of type numbers
let list1: number[] = [1,2,3];
let list2: Array<number> = [1,2,3];

// if you have fixed values of a 
// specfic type you can use a tuple like so:
let person1: [string, number] = ['Chris', 22];
// but you can can't change the order or add more stuff to it

enum Color {Red = 5, Green, Blue};

let c: Color = Color.Green;
console.log(c);

let randomValue: any = 10;
randomValue = true;
randomValue = 'Adam';

let myVariable: unknown = {name: 'meow'};

function hasName(obj: any): obj is { name: string } {
    return !!obj &&
        typeof obj === "object" &&
        "name" in obj
}

if(hasName(myVariable)){
    console.log(myVariable.name)
}

// (myVariable as string).toUpperCase();

let a;
a = 10;
a = true;

let b = 20;

let multiType: number | boolean;
multiType = 20;
multiType = true;

let anyType: any;
anyType = 20;

function add(num1: number, num2: number = 10): number{
    console.log(num1 + num2);
    return num1 + num2;
}
add(5,20);
add(5);

// add optional parameters using a ?


function fullName(person: {firstName: string, lastName: string}){
    console.log(`${person.firstName} ${person.lastName}`)
}

let p = {
    firstName: 'Bruce',
    lastName: 'Wayne'
};

fullName(p);

// instead of doing it this way we can use an interface instead
interface Person {
    firstName: string;
    lastName?: string;
}

function improvedName(person: Person){
    console.log(`${person.firstName} ${person.lastName}`)
}

let j = {
    firstName: 'Samurai',
    lastName: 'Jack'
}

improvedName(j);

class Employee {
   public employeeName: string;

    constructor(name: string){
        this.employeeName = name;
    }

    greet() {
        console.log(`Good Morning ${this.employeeName}`);
    }
}

let emp1 = new Employee('meep');
console.log(emp1.employeeName);
emp1.greet();

class Manager extends Employee {
    constructor(managerName: string){
        super(managerName);
    }
    delegatework(){
        console.log(`Manager delegating tasks`);
    }
}

let m1 = new Manager('Foo');
m1.delegatework();
m1.greet();
console.log(m1.employeeName);
