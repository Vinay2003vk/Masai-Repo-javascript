//1. **Basic For Loop**: Write a `for` loop that iterates over numbers from 1 to 10 and logs each number to the console.
//javascript
for (let i = 1; i <= 10; i++) {
    console.log(i);
}


//2. **For Loop with Array**: Write a function `printArrayElements(arr)` that uses a `for` loop to iterate over an array of strings and logs each element.
//javascript
function printArrayElements(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}

// Example usage:
const sampleArray = ['apple', 'banana', 'cherry'];
printArrayElements(sampleArray);


//3. **Nested For Loop**: Write a function `createMultiplicationTable(n)` that uses a nested `for` loop to create a multiplication table for numbers from 1 to `n` and returns the result in a 2D array.
//javascript
function createMultiplicationTable(n) {
    let table = [];

    for (let i = 1; i <= n; i++) {
        let row = [];
        for (let j = 1; j <= n; j++) {
            row.push(i * j);
        }
        table.push(row);
    }

    return table;
}