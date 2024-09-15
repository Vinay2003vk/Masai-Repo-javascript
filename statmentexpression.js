//1. **Identify Statement vs Expression:**

   //javascript
   // This is a statement
   for (let i = 0; i < 5; i++) {
    console.log(i);
}

// This is an expression
let sum = 2 + 2;
console.log(sum); // Output: 4


//2. **Expression in Function:**

 //javascript
 function expressionInFunction(a, b) {
     return a + b; // The addition 'a + b' is an expression
 }

 let result = expressionInFunction(3, 4);

 if (result > 5) { // The 'result > 5' is an expression within a statement.
     console.log("Result is greater than 5");
 } else {
     console.log("Result is not greater than 5");
 }

 

//3. **Complex Expression in Conditional:**

  //javascript 
  function complexExpression(a, b, c) {
      switch (true) { 
          case (a + b > c):
              return `The sum of ${a} and ${b} is greater than ${c}`;
          case (c * b < a):
              return `The product of ${c} and ${b} is less than ${a}`;
          default:
              return "None of the conditions were met.";
      }
  }