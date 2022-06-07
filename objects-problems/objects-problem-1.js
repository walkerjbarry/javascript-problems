/*Create a sample object, then write a JavaScript
function that deletes the property of an object passed to it.*/

STEP 1. Create an object
Step 2. Define some properties for the object, and some values for those properties.
STEP 3. Create our function, using the .remove() method. 
STEP 4. Log the function to the console. 


const bootcamp = {
  name:"ROOTSTECHNOLOGY",
  curriculum1:"HTML",
  curriculum2:"CSS",
  curriculum3:"JS",
  curriculum4:"ReactJs"
};
function remove(){
  delete bootcamp.name;
  console.log(bootcamp);
}
console.log(remove());
