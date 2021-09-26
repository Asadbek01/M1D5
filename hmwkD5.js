/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
- You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
- The solution must be pushed to the repository and be available for the tutors by the end of the day (5PM CET)
*/
function header (title){
  console.log(`\n---------<[ ${title.toUpperCase()} ]>---------`)
}
/* EXERCISE 1
Write a function called "area" which receives 2 parameters (l1, l2) and calculates the area of the associated rectangle.
*/
header("1st task")
// function area (l1, l2){
//     return l1 * l2;
// }
const area =(l1, l2)=>l1*l2

console.log(area(5,3))

/* EXERCISE 2
Write a function called "crazySum" which receives two integers as parameters.
It should return the sum of those two values, but if the two values are the same then it should return their sum multiplied by 3.
*/

header("2nd Task")
//  function crazySum (numer1, numer2){
// if(numer1===numer2){
//     return (numer1+numer2) *3
// }else{
//     return (numer1 +numer2)
// }
//  } 
const crazySum=(numer1,numer2)=>numer1==numer2 ? (numer1+numer2)*3 : numer1+numer2;
console.log(crazySum(5,6))





/* EXERCISE 3
Write a function called "crazyDiff" that computes the absolute difference between a given number and 19.
It should return triple their absolute difference if the given number is greater than 19.
*/
header ("3rd Task")
// function crazyDiff (n){
//     if (n>=19){
//         return Math.abs(n-19)*3
//     }else{
//         return Math.abs(n-19)
//     }
// }
const  crazyDiff = (n)=>n>19 ? Math.abs(n-19)*3 : Math.abs(n-19)
console.log(crazyDiff(5))

/* EXERCISE 4
Write a function called "boundary" which accept an integer parameter n and returns true if n is within 20 and 100 (included) or if n it's equal to 400.
*/
header ("4th Task")

// function boundary (n) {
//  if (n===400){
//      return true
//  }else{
//      return false
//  }

//     }
const boundry = (n)=>n==400 ? true : false
console.log(boundry(399));

/* EXERCISE 5
Write a function called "strivify" which accepts a string as a parameter.
It should add the word "Strive" in front of the given string, but if the given string already begins with "Strive", then it should just return the original string.
*/
header ("5th Task")

function strivify (stri){
if (stri.startsWith("Strive")){
  return stri
}else{
  return "Strive "+ stri
}
}
console.log(strivify("hi"));

/* EXERCISE 6
Write a function called "check3and7" which accepts a positive number as a parameter and checks if it is a multiple of 3 or a multiple of 7.
HINT: Modulus Operator
*/

header ("Answer for the 6")
function check3and7 (n) {
  if(n%3===0 || n%7===0){
      return "your number multiplied by 3 or 7"
  }else{
      return "Your number multiplied neither 3 nor 7"
  }

}
console.log(check3and7(5));
/* EXERCISE 7
Write a function called "reverseString" which programmatically reverses a given string (es.: Strive => evirtS).
*/
header("7 the task")

function  reverseString (string){
  return string.split('').reverse('').join('')
  
}
console.log(reverseString("Strive"))

/* EXERCISE 8
Write a function called "upperFirst" which capitalizes the first letter of each word of a given string passed as a parameter.
*/
header("8th task")

function upperFirst (str){
  return str.charAt(0).toUpperCase()+ str.slice(1);
}
console.log(upperFirst("nima"));

/* EXERCISE 9
Write a function called "cutString" which creates a new string without the first and last character of a given string passed as a parameter.
*/
header("9th task")
// function cutString (qwerty) {
// return qwerty.slice(1,-1);
// }
const cutString=(qwerty)=>qwerty.slice(1,-1);
console.log(cutString("How are you"))

/* EXERCISE 10
Write a function called "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10.
*/

function giveMeRandom(n){
  let array = [];
  for (let i=0; i<n; i++){
  array.push(Math.floor(Math.random()*10))
  }
  return array;

}
console.log(giveMeRandom(5));

/* WHEN YOU ARE FINISHED
Commit and push the code to your personal GitHub repository; then post the link of your commit on the Homework section of today's Eduflow.
*/
