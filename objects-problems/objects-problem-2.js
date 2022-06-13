/*Create an array of people objects with first name, last name, and age, 
then write a JavaScript function that takes in an array and console logs
 the first and last names of all the people.*/


/*First we create an array of 'people' objects, with properties of first and last names, as well as age. */

const arrayOfPeople = [
        {
            firstName : 'Barry', 
            lastName : 'Walker', 
            age : 45
        },
        {   
            firstName : 'Stevie', 
            lastName : 'Wonder', 
            age : 70
        },
        {   
            firstName : 'Donny', 
            lastName : 'Hathaway', 
            age : 73
        },
        {
            firstName : 'Joni', 
            lastName : 'Mitchell', 
            age : 75
        },
        {
            firstName : 'Willie', 
            lastName : 'Nelson', 
            age : 88
        }
    ]
/*Then we write our function, which will accept an array as an argument, and will log the first and last names of each object in the array to the console. 
For this example, I'm using the forEach() method to iterate through the array, and log the firstName +  ' ' (a blank space) + lastName of each object in the array to the console*/

    function getNames (array) {
        array.forEach(function(i) {
            console.log(i.firstName + ' ' + i.lastName)
        });
    }
    getNames(arrayOfPeople);

/*We the run our function, passing our original array as an argument.*/ 




