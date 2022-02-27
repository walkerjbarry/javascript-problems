/*

Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.


STEP 1. We declare a function (named findVowelCount) into which we will pass a string (named str).

  function findVowelCount(str){


STEP 2. We create an array, (named vowels) which defines what vowels are (for example, if we wanted to include y and w as vowels, we would do so here).

  const vowels = ["a", "e", "i", "o", "u"];


STEP 3. We create a variable, called vowelCount, which is given an initial value of 0.  

  let vowelCount = 0;

STEP 4. We create a variable (named myLetters) which converts the string into lowercase, and then split it (into individual characters, 
because we have provided NO space between the quotation marks). 

  const myLetters = str.toLowerCase().split("");

We also could have bypassed the toLowerCase method, 
if we would have declared the "vowels" variable thusly; const vowels = ["a", "e", "i", "o", "u", "A", "E", "I","O","U"]; 

  

STEP 5.  We write a for loop to loop through the array, starting at index position 0, and looping through, one index position at a time.

  for (var i = 0; i <= string.length - 1; i++) {

STEP 6. In our for loop, we include the conditions to return the count of 
 vowels (which will be our variable named vowelCount). We use the .includes method to examine whether the myLetters array 
 includes any of the "vowels" that we defined in STEP 2.  For each instance of a "vowel" in the array, we define that vowelCount will increase by 1.


  if (vowels.includes(myLetters[i])){
      vowelCount+= 1;
    }

STEP 6.  We include that the function return vowelCount.

  return vowelCount;

STEP 7.  We log vowelCount to the console to confirm our output. 

  console.log(vowelCount);

  
SOLUTION BELOW

*/



function findVowelCount(str){
const vowels = ["a", "e", "i", "o", "u"];
let vowelCount = 0;

const myLetters = str.toLowerCase().split("");

  for (let i = 0; i < myLetters.length; i++) {

    if (vowels.includes(myLetters[i])){
      vowelCount+= 1;
    }
  };
 return vowelCount;
}
console.log(findVowelCount("How many vowels are there in this statement?"));

/* Returns 13 */

 