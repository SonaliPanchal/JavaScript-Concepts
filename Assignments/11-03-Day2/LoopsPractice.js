const { prompt } = require("readline-sync")

let sum =0
let n = prompt("Enter the value of n")

n = Number.parseInt()
for(let i=0;i<=100;i++)
{
    console.log(i)
    sum += i+1
}
console.log('sum of first '+n+'netural umber is'+sum)