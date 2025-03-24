//Create Anonymous function to check if the given string is palindrome.
/*const name = "naman";

let test = function () {
  const reverse = name.reverse();
  if (name === reverse) {
    console.log("String is palindrome ");
  } else console.log("String is not palindrome ");
};*/

// using for loop //annonymous using function keyword
let s1 = "naman";
let s2 = "nitin90";
let reverseString = function(str) {
  let revStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    revStr += str[i];
  }
  if (revStr == str) {
    console.log("Passed string is palindrome");
  } else {
    console.log("Passed string is not palindrome");
  }
}
reverseString(s2);

//using reverse method//annonymous using arrow => function

let a1 = "naman";
let a2 = "nitin90";

let isPalindrome = (str1)=>{
  let rev = str1.split("").reverse().join("");
  //spliting the string into character array
  //reversing the eache of the character
  //combining each of the reverse charceter

  if (rev == str1) {
    console.log("Passed string is palindrome1");
  } else {
    console.log("Passed string is not palindrome1");
  }
}
isPalindrome(a1);
