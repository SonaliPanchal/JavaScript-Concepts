let a= 10
let b= "test"
let c= true
let d= null
let e;

console.log(typeof(a))
console.log(typeof(b))
console.log(typeof(c))
console.log(typeof(d))
console.log(typeof(e))

let uniId = Symbol("id")
console.log(uniId)
console.log(typeof(uniId))
console.log()

//nested Function calling

function one(name) {
    let b = "Test1"
    function two() {
        let a = "Test2"
        console.log(b)
        console.log(a)


    }
    two()

}

one()

