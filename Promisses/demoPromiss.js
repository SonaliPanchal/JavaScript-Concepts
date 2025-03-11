/* Defination
-->Promiss are a way to handle the asynchronous Opertaion in JavaScript in more organized and readable manner they 
provide a structure for mamangin nd chainning the asynchronous call*
--> A Promiss Represent  a value that may not be avaialble yet but will be resolve 
at some point of time
-->use :fetching data from an external API, loading images on a webpage,
 performing database queries, or processing user input that might take time to complete
-->It is having theree state pending,fullfilled or rejected
*/


const promis1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    const randomNum = Math.random();
    if (randomNum > 0) {
        resolve(randomNum);
    } else {
      reject(new Error("Value is less than 1"));
    }
  }, 5000);
});

promis1
  .then((result) => {
    console.log("Prmis", result);
  })
  .catch((error) => {
    console.log("Rejected", error);
  });


 
/* Promiss Chanin :
Prmisses we can chain together usin .then and use the first resul in second .then this we are y=using for syqunce async call*/
  /*
function getEvenNumber(value, delay) {
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (value % 2 == 0) {
        resolve(value);
      } else {
        reject(new Error(" Value is not divisible by 2"));
      }
    }, 2000);
  });
}
getEvenNumber(4, 1000)
  .then((result) => {
    console.log("step 1 getting the result of even number", result);
    return getEvenNumber(3, 1000);
  })
  .then((result) => {
    console("Step 2 getting the result of even number", result);
  })
  .catch((error) => {
    console.log("Promiss chain error" + error);
  });

  */
