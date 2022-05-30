/*Write a JavaScript function that takes in two parameters, an array and a number (n), and return the first n elements of that array.

Example: If I pass in an array and the number 2, your function returns the first 2 elements in that array.*/



//First we create an array (for the exercise / demo of the function)

const memorialDayFoods = ['Steak','Corn','Hot Dogs','Potato Salad','Chips','Ice Cream']; //today is Memorial Day (Happy Memorial Day)

//next, we define our function

const getMenu = function(array,num){

	/*For our function, we will start with a number of if statements to confirm the appropriate inputs, and declare 
	the messages to be returned upon improper input*/

	if(array === null || num === null) 											/*this confirms a valid array, 
																				and a valid number as inputs*/
		return "Your input should be ('array', 'number'), please re-enter inputs.";
	
	if(num<0) 																	//this confirms a positive number as input
		return "Please enter a positive value for num."
	
	if(num>array.length) 														/*this confirms number doesn't 
																				exceed number of items in array*/
		return "There are only " + array.length + "items.  Please try again."
	return array.slice(0, num); 												/*This is the desired action, upon valid inputs: 
																				the array is sliced into a new array depending
	 																			on the number input, and returned.*/
}

