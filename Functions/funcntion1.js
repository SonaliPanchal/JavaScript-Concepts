//defination-Set of statement that will perporm a aparticular task and that we can call multiple times
//every function in java Script function object

function testmyname()//function defeination
{

    console.log("sonali")

}
//function reference and with ()call fuction execution
testmyname()

function addTwonumber(n1, n2)//function with parameter
{
    console.log(n1 + n2)
    
}

addTwonumber(6, 8)//call function with pass arguments
const result = addTwonumber(6, "8")
addTwonumber(6, "ppppppp")
console.log("Result----->" + result)//undefuned because we are not defineing the return type for this function

//to store the function value in the variable we need to return the value for it form the function it self
function multiplyTwonumbers(n1, n2)//function with parameter
{
    //let result2 = n1*n2
    // return result2
    return n1 * n2
    console("this is un reacheble code as function scope is terminated after returning the value of the function")
}
console.log(multiplyTwonumbers())
const result2 = multiplyTwonumbers(9, 8)
console.log("result2----->" + result2)


function testLogin(username) {
    if (!username)//if(username==="undefind")
    {
        console.log("Enter User Name")
    }
    return `${username} just loggied in`
}

const resgult3 = testLogin("sonali Panchal")

console.log(resgult3)




