/*Create an object with three items in it, then write a 
JavaScript function that accepts an object and tells 
you the length (tells you how many items are in it) of the object.*/


/*First we create an object with three properties in it.*/

const barry = {
	age : 45,
	height : 68,
	weight : 165
};

/* Then we write our function.  We will use the Object.keys() method, 
which will return an array, with the object properties listed 
individually as elements within the array.  If we combine the .length() method, 
our function will return only the number of elements in the array.*/

function getObjLength(obj){                
	return Object.keys(obj).length;
};
console.log(getObjLength(barry));

/* Lastly, we log the function to the console, passing our object as an argument.*/
