/*Define a function that takes in an array of numbers/integers a
and returns the sorted version of that array, greatest to least. 
(Note: do NOT use the "reverse" method.)*/


//First we declare our function with which we will sort our array. 

function myHighestToLowest(a, b) {  
  if (a > b) return 1;  
  if (a == b) return 0;
  if (a < b) return -1;
}

let arr1 = [99,101,-3200,3,2,-156,7,18,59];  //We then declare our array. 
console.log(arr1.sort(myHighestToLowest));  

//Using the sort method on arr1, pass the function myHighestToLowest., and log the output to the console.// 

