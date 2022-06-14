/*Create an object, then write a JavaScript function 
that checks whether an object contains the specified key.*/

/*First we create an object*/

const barry = {
	age : 45,
	firstName : 'Barry',
	lastName : 'Walker'
}

/*Then we write our function.  We are using the hasOwnProperty() method, 
which will return true if the supplied key is contained in the object.*/

function findObjKey(obj, key){
	return obj.hasOwnProperty(key);
};

/*We then log our function to the console, passing our object, and key as arguments.*/
console.log (findObjKey(barry, "lastName"));
