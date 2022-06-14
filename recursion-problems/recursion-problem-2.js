Write a (recursive) JavaScript function to compute the sum of an array of integers.

function arraySum(arr) {
  if (arr.length === 1) {   
    return arr[0];			
  }
/*This will return the value of first index position [0], 
 if the array is only one index position in length. */

  else {
    return arr.pop() + arraySum(arr);
	/*This will return the sum of the first index position [0] of the array, 
	plus the successive first index position of the array [0], 
	iterating continuously through the entirety of the array. */
	}	
  };										

/*We now log a sample array to the console to test our function*/
console.log(arraySum([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16])); //outputs 136