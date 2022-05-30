/*Define a function that takes in an array of elements and joins them together into a string separated by a comma with a space after the comma.

Example array: let colors = ["Red", "Green", "White", "Black"];

Should look like: "Red, Green, White, Black"

Do NOT use the "toString" method.*/

//I'm thinking to use the .join() method.  The only "trick" is to add the space after the comma separator. 

const memorialDayFoods = ['Potato Salad', 'Steak', 'Grilled Corn on the Cob', 'Salad', 'Grilled Veggies']; 
/*Today's Memorial Day, and I'm about to go fire up the grill (Happy Memorial Day).*/ 

const foodsStr = memorialDayFoods.join(', ');// this is where we added our custom separator (the space)

console.log(foodsStr);

