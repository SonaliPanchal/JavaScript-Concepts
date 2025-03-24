//Promiss to toast the bread
const toastTheBread = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      isBreadToast = true;
      if (isBreadToast) {
        resolve("Bread is toasted!!!!!!!!!!!!!!!");
        console.log("Bread is toasted!!!!!!!!!!!!!!!");
      } else {
        reject("Bread toast is not done");
      }
    }, 2000);
  });
};

const fryTheEgg = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        isEggFried = true;
        if (isEggFried) {
          resolve("Egg is fried!!!!!!!!!!!!!!!");
          console.log("Egg is fried!!!!!!!!!!!!!!!");
        } else {
          reject("Egg is not Fried");
        }
      }, 1000);
    });
  };

  //function to prepare the breakfast

  // Async function to prepare breakfast  
async function prepareBreakfast() {  
    await toastTheBread(); // Wait for the bread to toast  
    await fryTheEgg();     // after bread 
    console.log("Serve the Breakfast is now!!!!!!!!!!"); // Serve the breakfast
}  


// Function to prepare breakfast using promise chaining  
function prepareBreakfast1()
{
    toastTheBread()//first bread is toasting
    .then(fryTheEgg)//once bread toast is done start frying egg
    .then(()=>{
        console.log("Serve the Breakfast is now!!!!!!!!!!");

    })
}

// Start the breakfast preparation  
//prepareBreakfast();  
prepareBreakfast1()




