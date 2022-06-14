/*Write a JavaScript function to sort the following array of objects by title value.

Hint: Read about the JavaScript sort method.*/


const sampleArray = [ 

   { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},

   { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},

   { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}

   ];
/*In our function, we will compare the first and second elements (a and b) in our objects.*/
   function compare(a, b) {
      let titleA = a.title, titleB = b.title;
      if (titleA > titleB){
         return 1;  
      }
      else if (titleA < titleB){ 
         return -1;                 /*If a is less than b, put a on the left side, which shows increasing order from left to right. */
      }
      else {
         return 0;
      }
   }
   sampleArray.sort(compare);  //We run the .sort() method, passing our function as an argument.
   console.log(sampleArray);   //We log the (now sorted) array to the console. 