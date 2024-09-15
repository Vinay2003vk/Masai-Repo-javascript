function checkCoercion(a, b) {
    console.log(`Using == : ${a} == ${b} ->`, a == b);
    console.log(`Using === : ${a} === ${b} ->`, a === b);
}

// Test cases
checkCoercion("5", 5); // "5" and 5
checkCoercion(false, ); // false and 
checkCoercion(null, undefined); // null and undefined


//2. **Coercion in Arithmetic:**


//javascript
function coerceInArithmetic(a, b) {
    console.log(`${a} + ${b} = `, a + b);
    console.log(`${a} - ${b} = `, a - b);
    console.log(`${a} * ${b} = `, a * b);
    console.log(`${a} / ${b} = `, a / b);
}

// Test cases with different types (e.g., string and number)
coerceInArithmetic("10", 2); // "10" (string) and 2 (number)
coerceInArithmetic("5", "3"); // "5" (string) and "3" (string)
coerceInArithmetic(7 , true); // 7 (number) and true (boolean converted to number as 1)


//3. **Implicit Coercion in Conditionals:**

//javascript
function coerceInConditionals(value) {
    if (value) {
        console.log(`The value "${value}" is truthy.`);
    } else {
        console.log(`The value "${value}" is falsy.`);
    }
}