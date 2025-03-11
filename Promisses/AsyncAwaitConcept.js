/* 
Java Script is always Synchronous SCripting language
Javascript is sigle Threaded application
We have multiple Engines to speed up not using only Js engine
Synchronus - code is executing line by line
Asynchronous - multiple thread executing mutiple line of code

*/
//-----------------------------------------------------------Code-----------------------------------
//async function without await
async function f1() {
  console.log("asyc function without using await step");
  return 100; //return a promiss (resolved ) on top of 4
}

f1().then((result) => {
  console.log("Result with await step " + result);
});

//async function without await but with error with reject promiss

async function f2() {
  console.log("asyc function without using await step but with error");
  //throw new Error("This is the The Erro");
  //return a promiss (resolved ) on top of 4
}

f2().then((error) => {
  console.log(`Result without await step with error ${error}`);
});

//async function with a resolved / rejected promiss

function getInfo() {
  return new Promise((resolve, reject) => {
    const randomNumber = Math.random();
    setTimeout(() => {
      if (randomNumber > 0) {
        resolve(randomNumber);
      } else {
        reject(new Error("Value is not expeceted"));
      }
    });
  });
}

async function getNumberInfo() {
  try {
    const result = await getInfo();
    console.log("Result for getinfo method", result);
  } catch (error) {
    console.log("Error", error);
  }
}

//call getNumberInfo
getNumberInfo()
