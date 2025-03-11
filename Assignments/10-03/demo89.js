let str1 = "racecar";
let str2 = "nitin";
let str3 = "Rama";

function isPalindrome(str) {
    let j = str.length - 1
    for (let i = 0; i < str.length; i++) {
        if (str[i] != str[j]) {
            return false;
        }
        j--;
    }
    return true;
}

//console.log(isPalindrome(str1));
//console.log(isPalindrome(str2));
console.log(isPalindrome(str3));

