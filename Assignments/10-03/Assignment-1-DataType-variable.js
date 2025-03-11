//Create simple function utilizing all primitive datatypes and scope concept.

let globalNum = 100; //global integer
let globalString = "Indore";
let GlobalBool = true;

function TestFuntion() {
  let localNum = 1000; //Local integer
  let localString = "Ujjian";
  let localBool = false;

  console.log("Access Local Variable"+localNum)
  console.log("Access Local Variable"+localString)
  console.log("Access Local Variable"+localBool)
  //Access global variable inside the function also perform opertaion

  console.log("Global  Variable"+globalNum)
  console.log("Global  Variable"+globalString)

  console.log("Global  Variable"+GlobalBool)

  if(GlobalBool)
  {
    console.log("i ma in inner function")
  }

  // opertaion in function with global and local variable
  console.log(globalNum+localNum)


}

console.log("Global  Variable out side the function"+globalNum)
console.log("Global  Variable out side the function"+globalString)

console.log("Global  Variable out side the function"+GlobalBool)


//belo will give error as local variable access is inside the function only
//console.log("Access Local Variable out side the function"+localNum)



TestFuntion()
