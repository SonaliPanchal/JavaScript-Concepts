//Promise.allSettled won't reject if any of the input promises are rejected, 
// and it waits for all promises to complete

const getData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(" Promiss 1 is calling");
    }, 1000);
  });
};

const getError = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(" Promiss 2 is calling");
    }, 1000);
  });
};

const getdata2 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(" Promiss 3 is calling");
    }, 1000);
  });
};

Promise.allSettled([getData(), getdata2(), getError()])
  .then((dataArray) => {
    console.log("All data from all the calling Function", +dataArray);
  })
  .catch((error) => {
    console.log("Error in Prmiss" + error);
  });

  //this method taking the array of promisses and resolve an dreject as soon as any one is completed
  //it's usefull for scenarios where we want to respond to the first
Promise.race([
    getData(),
    getError()
])
.then(result=>{
    console.log(""+result)
})
.catch(error=>{
    console.log("")
})

//Promiss.any-it is not reject immidiatly when the first promiss is reject
//instead it waits untill at least one promiss resolve or pass

Promise.any([
    getData(),
    getError()
])
.then(result=>{
    console.log(""+result)
})
.catch(error=>{
    console.log("")
})