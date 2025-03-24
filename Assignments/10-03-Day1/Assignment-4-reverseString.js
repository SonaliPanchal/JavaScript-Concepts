//Create Expression function to reverse a given string.

let str1 = "Yash Technology"
let expressionDemo = function reverse(str)
{
    //
    let rev = str.split("").reverse().join('')
    return rev

}

let revStr = expressionDemo(str1)
console.log("Reverse String ====>"+revStr)
console.log(typeof revStr)

