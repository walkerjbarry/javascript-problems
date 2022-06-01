/*Write a JavaScript function to remove duplicate items from an array (consider case sensitivity).

NOTE: Do NOT use the Set method.*/ 

                                                //First we create an array//
const cars = ["volvo", "toyota", "bmw",
            "ford", "nissan", "maserati", "nissan", "volvo", "dodge", "dodge", "maserati"];
 
 function removeDuplicates(cars) {            /*Then we declare our function, which will create 
                                                the new (currently empty) array, 
                                                 to be defined without duplicates/*/
        const unique = []; 
        cars.forEach(element => {                
                                                /*Here we are using the forEach method, passing an if statement, to define
                                                 the conditions to be met by each element for it to be included in the 
                                                 new array ('unique').  If the condition we define returns as true, the element 
                                                 is to be added to the array.*/
            if (!unique.includes(element)) {    /*The condition is, if the new array ('unique') does not 
                                                include the element, it is to be pushed to the new array.  This would mean that 
                                                duplicate values would return as false, and thus, not be added to the new array.*/
                unique.push(element);
            }
        });
        return unique;                          //We return the new array
    }
 
    console.log(removeDuplicates(cars));           //...and log our function to the console, passing the original array.
                                                // Outputs ["volvo", "toyota", "bmw", "ford", "nissan", "maserati", "dodge"]
