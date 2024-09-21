//1. **Basic String Interpolation:**

function greet(name, age) {
    return `Hello, my name is ${name}, and I am ${age} years old.`;
}

console.log(greet('John', 25)); // "Hello, my name is John, and I am 25 years old."


//2. **Multi-line Strings:**

function generateParagraph() {
    return `This is line one.
This is line two.
This is line three.`;
}

console.log(generateParagraph());
/*
"This is line one.
This is line two.
This is line three."
*/


//3. **Expression Inside Template Literals:**

function calculateSum(a, b) {
    const sum = a + b;
    return `The sum of ${a} and ${b} is ${sum}.`;
}

console.log(calculateSum(5, 3)); // "The sum of 5 and 3 is 8."


//4. **Embedding a Function in Template Literals:**

function formatCurrency(value) {
    return `$${value.toFixed(2)}`;
}

const amount = 500;
console.log(`The total amount due: ${formatCurrency(amount)}.`); // "The total amount due: $500.00."


//5. **Nested Template Literals:**

function formatMessage(name, status) {
    const statusMessage = status ? 'active' : 'inactive';
    return `Welcome back, ${name}! Your status is: ${statusMessage}.`;
}
console.log(formatMessage('John', true));