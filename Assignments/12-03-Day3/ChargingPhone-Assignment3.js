const plugthePhone= ()=>{
 return new Promise((resolve)=>{
    console.log("Plug in the charger!!!!!!!!!!!");  
        setTimeout(() => {  
            console.log("Charger is plugged in!!!!!!!!!!");  
            resolve(); // Resolve when plugged in  
        }, 1000); // 1 second  
    });  

}

// Function to charge to 50%  
const halfCharging= function halfCharging() {  
    return new Promise(resolve => {  
        is50PerCharged = true
     
        console.log("Charging is done till 50%");  
        setTimeout(() => {  
            if(is50PerCharged){
            console.log("Phone is charged to 50%!");  
            resolve(); 
            }
            else{
                console.log("Phone is charging is still going on!");  
            }
        }, 2000); //as mentioned wait for 2 sec
    });  
}  


// Function to unplug the charger  
const unplug = function unplug() {  
    return new Promise(resolve => {  
        console.log("Unplug the charger!!!!!!!!!!!!!");  
        setTimeout(() => {  
            console.log("Charger Got unplugged!");  
            resolve(); // Resolve when unplugged  
        }, 1000); // As Mention wait for 1 second  
    });  
}  

//async function to call all prmissess

async function chargePhone() {  
    await plugthePhone();          // Wait for the charger to be plugged in  
    await halfCharging();     // Wait for the phone to charge to 50%  
    await unplug();         // Wait for the charger to be unplugged  

    console.log("Charging process completed!");  
}  

//async function call where we are using the prmiss all   
async function chargePhone1() {  
    await plugthePhone(); // Wait for the charger to be plugged in  
    // Start charging and unplugging concurrently  
    const halfChargePromise = halfCharging(); // Initiate half charging  
    const unplugPromise = halfChargePromise.then(() => unplug()); // Unplug after half charging is done  

    // Wait for all promises to settle  
    await Promise.all([halfChargePromise, unplugPromise]);   

    // Final message after all promises are resolved  
    console.log("Charging process completed!");  
}  
// Start the charging process  
//chargePhone();  

// Start the charging process  
chargePhone();  