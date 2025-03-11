/*
Promiss.all i commonly used where we want to perform multiple asynchronous operation in parallel
and wait for all them to complete
*/
const function1 = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
console.log(" Promiss 1 is calling")
        })
    },1000)

}

const function2 = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
console.log(" Promiss 2 is calling")
        })
    },1000)

}

const function3 = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
console.log(" Promiss 3 is calling")
        })
    },1000)

}

Promise.all([
    function1(),function2(),function3()
])
.then(dataArray=>{
console.log("All data from all the calling Function",+dataArray)
})
.catch(error=>{
console.log("Error in Prmiss"+error)
});
