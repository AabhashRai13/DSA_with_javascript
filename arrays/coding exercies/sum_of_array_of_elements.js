// Sum of Array Elements
// Write a function sumArray that takes an array of numbers and returns the sum of all elements.
//     Example: sumArray([5, 10, 15]) should return 30.

// Hint: Use a loop to accumulate the sum or try JavaScript’s reduce method.

function sumArray(array) {
    return array.reduce((acc, value) => acc + value, 0);

}

sumArray([5, 10, 15]);