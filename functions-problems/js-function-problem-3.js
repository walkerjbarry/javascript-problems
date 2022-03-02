/*Write a JavaScript function that accepts two arguments, a string and a letter
and the function will count the number of occurrences of the specified letter within the string.
 

STEP 1.  We create a function (named 'char_count'), and define that the function will accept a string, and a letter. 
  
  function char_count(str, letter) 
{

STEP 2. We declare our variable (named 'letter-Count') that will count the number of instances of the yet-to-be-specified letter. 
We use "var" instead of "const' because the value of the variable will change, as the function runs.  For now, we give the variable a value of 0.
  
  var letter_Count = 0;

STEP 3. We write our "for loop".  In our "for loop", we declare a variable (named 'position'), 
which will start at index 0, is less than the length of our string, and will iterate one index position at a time. 

  for (var position = 0; position < str.length; position++) 
{

STEP 4. We write our "if statement".  We use the .charAt method to identify when the 'position' variable has encountered 
an instance of our still-to-be-specified letter, the variable 'letter_Count' will increase by 1. 

  if (str.charAt(position) == letter) 
      {
      letter_Count += 1;
      }

STEP 5. We then add our return statement to return the value of letter_Count.

  return letter_Count;
}

STEP 6. We the log our function to the console, including the string we would like to analyze, and the 
the letter we would like our function to count. 

  console.log(char_count("Barry is a Web Developer.", "r"));

  //Outputs '3'//


SOLUTION BELOW

*/

function char_count(str, letter) 
{
 let letter_Count = 0;
 for (let position = 0; position < str.length; position++) 
 {
    if (str.charAt(position) == letter) 
      {
      letter_Count += 1;
      }
  }
  return letter_Count;
}

console.log(char_count("Barry is a Web Developer.", "r"));
