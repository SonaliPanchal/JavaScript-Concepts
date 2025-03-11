function calculatePrice(num1) {
    return num1
}
const result1 = calculatePrice(200, 300, 700)
console.log("result-------------->" + result1)

//rest operator

function calculatePrice1(...num1) {
    return num1
}
const result2 = calculatePrice1(200, 300, 700)
console.log("result2-------------->" + result2)

function calculatePrice2(val, val2, ...num1) {
    return num1
}
console.log(calculatePrice2(79, 80, 900, 78, 234))
console.log(typeof calculatePrice)

//function expression

let myfunc = function sayHello() {

    //return 100
    console.log("hellllllo")
}
let r = myfunc()
console.log(r)

//annonymus function expression

let myf1 = function () {
    console.log("i am in anonymous function")
}

myf1()

//add function in object

let myobj = {
    "name": "Sonu",
    f3: function () {
        console.log("i am in inside the object")
    }
}

myobj.f3()

//function in array

let arr = [1, "ooo", f4 = function () {
    console.log("iam in array")
}
]

arr[2]()

//arrow function

let z = () => {
    console.log("I am in the arrow function")
}

z()

let z1 = (n1, n2) => {
    console.log("I am in the arrow function")
    return n1 + n2
}

console.log(z1(100, 100))
//if we have single line of code in the function
let myadd = () => console.log("i am in indore")
myadd()

console.log(typeof(myadd))





