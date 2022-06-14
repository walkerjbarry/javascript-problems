 
/*Write a (recursive) JavaScript function to calculate the factorial of a number.*/

 function getFactorial(n) {
            if (n === 0) { 
                return 1;   
            }
            else { 
                return n * getFactorial( n - 1 ); /*This will decrement, mulitplying n with n minus one.*/ 
            }
        };
console.log(getFactorial(8));  /*Here we input a sample n for illustrative purposes. We have chosen 8, which outputs 40320*/