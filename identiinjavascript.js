/### Type Identification in JavaScript

//1. **Identify Type Using `typeof`:**

//javascript
function identifyType(value) {
  console.log(typeof value);
}

// Test cases
identifyType(42);           // number
identifyType('Hello');      // string
identifyType(true);         // boolean
identifyType([1, 2, 3]);    // object (arrays are a type of object)
identifyType({a: 1});       // object
identifyType(function() {});// function


//2. **Check Object vs Array:**

//javascript
function isArrayOrObject(value) {
  if (Array.isArray(value)) {
    return 'array';
  } else if (typeof value === 'object') {
    return 'object';
  }

  return typeof value;
}

// Test cases
console.log(isArrayOrObject([1,2,3]));   // array
console.log(isArrayOrObject({a:3}));     // object 
console.log(isArrayOrObject(42));        // number 
console.log(isArrayOrObject('Hello'));   // string 


//3. **Complex Type Identification:**

//javascript
function identifyComplexType(values) {
  let types = values.map(value => {
    if (Array.isArray(value)) {
      return 'array';
    } else if (value instanceof Date) {      	
      return 'date';
    } else if (value === null){
        return "null";
  }else{
    return typeof value;   
  }

 });

return types;
}