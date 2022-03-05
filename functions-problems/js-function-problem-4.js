/*Write a JavaScript function that iterates the integers from 1 to 100. 
But for multiples of three print "Fizz" instead of the number and for the multiples 
of five print "Buzz". For numbers that are multiples of both three and five print "FizzBuzz".

STEP 1. We create a function (named 'theFizzTheBuzz') that accepts no arguments, as it will run 
a for loop with if, else if, and else statements. 

  function theFizzTheBuzz(){

STEP 2. We write our for loop, with a variable ('i') starting at 1, and iterating by one all the way to 100.

  for ( let i = 1; i <= 100; i++ )
  {

STEP 3. We write an if statement to identify numbers that are divisible by both 3 AND 5, and log "FizzBuzz" to the console for those numbers. 

   if ( i%3 === 0 && i%5 === 0 )
  {
   console.log("FizzBuzz");

STEP 4. We write an else if statement to identify numbers that are divisible by 3, and to log "Fizz" to the console for those numbers. 

   else if ( i%3 === 0 ) 
      {
        console.log(" Fizz");

STEP 5. We write an else if statement to identify numbers that are divisible by 5, and to log "Buzz" to the console for those numbers. 

    else if ( i%5 === 0 ) 
      {
        console.log(" Buzz");

STEP 6. We write an else statement for all other numbers to be logged to the console. 

      {
     console.log(i);
    }

STEP 7. We call our function by logging it to the console.
SOLUTION BELOW
*/


function theFizzTheBuzz(){
  for ( let i = 1; i <= 100; i++ )
  {
      if ( i%3 === 0 && i%5 === 0 )
    {
     console.log("FizzBuzz");
    }
    else if ( i%3 === 0 ) 
    {
      console.log(" Fizz");
    }
    else if ( i%5 === 0 ) 
    {
      console.log(" Buzz");
    }
    else
    {
     console.log(i);
    }
  }
}

console.log(theFizzTheBuzz());
