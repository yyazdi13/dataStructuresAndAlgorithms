"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var message = 'Goodbye World';
console.log(message);
var isBeginner = true;
var total = 0;
var name = 'Meep';
var sentence = "My name is " + name + " \nI am a beginner at TypeScript";
var n = null;
var u = undefined;
var isNew = null;
var myName = undefined;
// here's 2 ways of declaring and array of type numbers
var list1 = [1, 2, 3];
var list2 = [1, 2, 3];
// if you have fixed values of a 
// specfic type you can use a tuple like so:
var person1 = ['Chris', 22];
// but you can can't change the order or add more stuff to it
var Color;
(function (Color) {
    Color[Color["Red"] = 5] = "Red";
    Color[Color["Green"] = 6] = "Green";
    Color[Color["Blue"] = 7] = "Blue";
})(Color || (Color = {}));
;
var c = Color.Green;
console.log(c);
var randomValue = 10;
randomValue = true;
randomValue = 'Adam';
var myVariable = { name: 'meow' };
function hasName(obj) {
    return !!obj &&
        typeof obj === "object" &&
        "name" in obj;
}
if (hasName(myVariable)) {
    console.log(myVariable.name);
}
// (myVariable as string).toUpperCase();
var a;
a = 10;
a = true;
var b = 20;
var multiType;
multiType = 20;
multiType = true;
var anyType;
anyType = 20;
function add(num1, num2) {
    if (num2 === void 0) { num2 = 10; }
    console.log(num1 + num2);
    return num1 + num2;
}
add(5, 20);
add(5);
// add optional parameters using a ?
function fullName(person) {
    console.log(person.firstName + " " + person.lastName);
}
var p = {
    firstName: 'Bruce',
    lastName: 'Wayne'
};
fullName(p);
function improvedName(person) {
    console.log(person.firstName + " " + person.lastName);
}
var j = {
    firstName: 'Samurai',
    lastName: 'Jack'
};
improvedName(j);
var Employee = /** @class */ (function () {
    function Employee(name) {
        this.employeeName = name;
    }
    Employee.prototype.greet = function () {
        console.log("Good Morning " + this.employeeName);
    };
    return Employee;
}());
var emp1 = new Employee('meep');
console.log(emp1.employeeName);
emp1.greet();
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(managerName) {
        return _super.call(this, managerName) || this;
    }
    Manager.prototype.delegatework = function () {
        console.log("Manager delegating tasks");
    };
    return Manager;
}(Employee));
var m1 = new Manager('Foo');
m1.delegatework();
m1.greet();
console.log(m1.employeeName);
