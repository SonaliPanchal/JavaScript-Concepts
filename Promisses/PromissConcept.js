/* 
Promisses : Gives a promiss the given task  will be complete in some time not immidiate
asynchronous method returns a promise to supply the value at some point in the future.
//A Promise is in one of these states:

pending: initial state, neither fulfilled nor rejected.
fulfilled: meaning that the operation was completed successfully.
rejected: meaning that the operation failed.
*/

//const { concatSeries } = require("async");

//Promiss in java script is class for that we are creating instance or object of that class to create a promiss
const promissForrandomNumber = new Promise((resolve, reject) => {
  //this is callback function =>
  setTimeout(() => {
    // this is async function
    const randonValue = Math.random();

    if (randonValue > 0) {
      resolve(randonValue);
    } else {
      reject(new Error("Value is less then 1"));
    }
  }, 2000);
});

promissForrandomNumber
  .then((result) => {//handler or a callback function which take two arrgumenet and which make our promiss either sucess or reject
    console.log("Promiss Got full filled  " , result);
  })
  .catch((error) => {
    console.log("Promiss got rejected", error);
  });
