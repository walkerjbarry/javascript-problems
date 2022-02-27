


/* Write a javascript function that accepts a string as a parameter, and returns the longest word in the string



Step 1: Write a JavaScript function that accepts a string as a parameter.
  
  function findLongestWord(str) { 


Step 2. Define a variable named "longestWord", and set it to an empty value ("") for now.
  
   let longestWord = ""; 


Step 3: Split the string passed in by using the .split method, and turn the string into an array of each word, and store it in a variable named "words". 
  
   let words = str.split(" "); 


Step 4: Create a for statement that defines a variable named "i", and sets the initial value equal to 0, set i < the length of the "words" array we just 
created above, and lets i iterate one index position at a time. 
  
   for (let i = 0; i < words.length; i += 1)  


The statement will create a variable named individualWord, which will represent each individual index position in the array. 
 
   let individualWord = words[i]; 


This is followed by an if statement, declaring that as the function iterates through the array, if the length of the next individualWord in the array is 
greater than the length of the current longest word (longestWord) in the array, the individualWord that is longer, now becomes the new longestWord.
  
   In my opinion, this is the 'meat' of the function.  This is the part where each iteration checks to see if the new index position is larger than 
   the existing 'longestWord', and updates accordingly.  This seems like it will be very useful in future programming efforts.
  
   if (individualWord.length > longestWord.length){
   longestWord = individualWord;}

Step 5.  Now all that is left, is to add our return statement to the function,

   return longestWord 

Step 6. ...and to log the function to the console to confirm the output.

   console.log(findLongestWord("This is a test string"));  


  SOLUTION BELOW */


function findLongestWord(str) {
  let longestWord = "";
  const words = str.split(" ");

  for (let i = 0; i < words.length; i += 1){
    let individualWord = words[i]; 
    if (individualWord.length > longestWord.length){
        longestWord = individualWord;
      }
    }
	   return longestWord;
  }

console.log(findLongestWord("This is a test string"));
  /* Outputs "string"*/. 