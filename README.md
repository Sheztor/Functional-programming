# :gear: Functional Programming - JavaScript

## First-class functions

In JavaScript, functions are first-class, which means they can be assigned to variables, passed as arguments to other functions, and returned as values from other functions.

#### Code example

```JS
const sum = (a, b) => a + b;

const result = sum(2, 3); // Using the function like any other value
console.log(result); // Output: 5
```

## Recursion

Recursion in JavaScript is a technique where a function calls itself within its own definition. This can be a powerful tool for solving problems that can be broken down into smaller, similar subproblems.

#### Code example

```JS
function factorial(n) {
  // Base case: if n is 0 or 1, return 1
  if (n === 0 || n === 1) {
    return 1;
  } else {
    // Recursive case: return n times the factorial of (n - 1)
    return n * factorial(n - 1);
  }
}

// Example usage:
console.log(factorial(5)); // Output: 120
```

In this example, the factorial function calculates the factorial of a given number n. It does this by recursively calling itself with n - 1, until it reaches the base case where n is 0 or 1, at which point it returns 1. Then, it combines the results of the recursive calls to calculate the factorial of the original n.


## Pure Functions

These are functions that produce the same result for the same arguments and have no observable side effects. This facilitates reasoning about program behavior and enhances testability and modularity.

#### Code example

```JS
const square = (x) => x * x; // Función pura

console.log(square(3)); // Output: 9
```

#### Example of impurity: it's working with a global variable, if it changes, our output will change too.
```JS
let x = 5;

function notPureFunction(y) {
  return x + y;
}
```
## Immutability

Immutability implies that data does not change once created. In functional programming, immutable data structures are preferred, which means they are not directly modified but instead new instances are created with the necessary changes.

#### Code example

```JS
const originalArray = [1, 2, 3];
const modifiedArray = originalArray.concat(4); // Create a new array
console.log(originalArray); // Output: [1, 2, 3]
console.log(modifiedArray); // Output: [1, 2, 3, 4]
```
