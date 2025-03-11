"use strict"//treat all js code as newer version
//ecma script is an organization which define us the rules and standard of the js code
/*JavaScript has 8 Datatypes
String
Number
Bigint
Boolean
Undefined
Null
Symbol
Object*/
// Numbers:
let length = 16;
let weight = 7.5;

// Strings:
let color = "Yellow";
let lastName = "Sonali";

// Booleans
let x = true;
let y = false;

// Object:
const person = {firstName:"Sonali", lastName:"PAnchal"};

// Array object:
const cars = ["Saab", "Volvo", "BMW"];

// Date object:
const date = new Date("2022-03-25");

//String

let carName1 = "Volvo XC60";

//BigInt
let x1 = BigInt("123456789012345678901234567890");

//undefined and null

let a;//undeined
let b = null //rpsentaion of empty value/ it is type of Object//Standalone value

Symbol //unique ness of variable
const id = Symbol('23')
const id1= Symbol('23')
console.log("sysmbol value comaparision   ",id===id1)


//coversion Opertator
let score = "100"
console.log(typeof score)
let valueinNumber = Number(score)
console.log(typeof valueinNumber)
console.log("valueinNumber====>"+valueinNumber)
/*"100"===>100
"true"===>1
"Sonali"==>NAN*/

let b1 = 1
let covertBoolean = Boolean(b1)
console.log(covertBoolean)
/*1==>true
0==>false
""==>false*/

//nonpremitive(Reference)
//is javascript is statically types or dynamically typed
//array,Object,functions

let myobje = {
    a:"jsdjh",

}

console.log(typeof myobje)


