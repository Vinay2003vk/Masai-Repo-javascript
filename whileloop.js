//1. **Basic While Loop**: Write a `while` loop that logs numbers from 1 to 5. Stop the loop once the number reaches 5.
    //javascript
    let i = 1;
    while (i <= 5){
        console.log(i);
        i++;
    }
    

//2. **While Loop with Condition**: Write a function `countDownFrom(n)` that uses a `while` loop to count down from `n` to  and log each number.
    //javascript
    function countDownFrom(n){
        while (n >= 10){
            console.log(n);
            n--;
        }
    }

    // Example usage:
    countDownFrom(10);
    

//3. **While Loop with Break Condition**: Write a function `findFirstEven(numbers)` that uses a `while` loop to iterate over an array of numbers and returns the first even number. Use a `break` statement to exit the loop once an even number is found.
   //javascript
   function findFirstEven(numbers){
       let index = 0;
       while (index < numbers.length){
           if(numbers[index] % 2 === 0){
               return numbers[index];
           }
           index++;
       }
       return null; // Return null if no even number is found
   }
text="vinay";
while(i <= 10){
  text += "The number is " + i;
  i++;
}