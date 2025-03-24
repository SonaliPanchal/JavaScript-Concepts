
//2.Print the reverse of the Right Angle pattern.

function DecreamentRightAngleStarPattren(num){
// Outer loop for taking the row count
for (let i = num; i >= 1; i--) { 
    
    //taking empty value to make the emty on each iteration of outr loop
    let value = ''; 
    for (let j = 1; j<=i; j++) { // Inner loop for printing stars  
        value += '*'; //add star to each of row accoring to the sceon loop run 
    }  
    console.log(value); 
}
}

DecreamentRightAngleStarPattren(10) // passing number of rows from the function
