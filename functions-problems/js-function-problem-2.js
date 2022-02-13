/*Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.*/

/*Write a function that accepts a string as a parameter, and counts the number of vowels in the string.

Step 1. We define a variable (called str) to represent our string, which is also provided.

  let str = "I just got a job as a Web Developer!";

Step 2.  We create an array called (myLetters), by using the .split method on str, and passing NO space between the quotation marks, so that it create an array by splitting the string into individual letters.

  const myLetters = str.split("");

Step 3. We create a variable, called vowelCount, which is given an initial value of 0.  

  let vowelCount = 0;

Step 4.  We write a for loop to loop through the array.

  for (var i = 0; i <= string.length - 1; i++) {

Step 5. In our for loop, we include the conditions to return the count of 
 vowels, which will be a variable named vowelCount. 

  if (str.charAt(i) == "a" || str.charAt(i) == "e" || str.charAt(i) == "i" || 
  str.charAt(i) == "o" || str.charAt(i) == "u") {
      vowelCount += 1;
    }
   }

Step 6.  We log vowelCount to the console to check our answer. 

  console.log(vowelCount);

  SOLUTION BELOW*/

let str = "I just got a job as a Web Developer!";
const myLetters = str.split("");
let vowelCount = 0;


 
  for (var i = 0; i <= str.length - 1; i++) {

    if (str.charAt(i) == "a" || str.charAt(i) == "e" || str.charAt(i) == "i" || str.charAt(i) == "o" || str.charAt(i) == "u") {
      vowelCount += 1;
    }
  }
 console.log(vowelCount);

  /* If you want to include "y" and "w" in your loop, the if statement would be as follows:   if (str.charAt(i) == "a" ||
  str.charAt(i) == "e" || str.charAt(i) == "i" || str.charAt(i) == "o" || str.charAt(i) == "u") {
      vowelCount += 1; 
   */
