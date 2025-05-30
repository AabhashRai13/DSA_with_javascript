const arr = [1, 2, 3, 4, 5]

// Accessing elements from an array using index
let value = arr[0]
// time complexity O(1)
// space complexity O(1)

// for loop
for (let i = 0; i < arr.length; i++) {
    console.log(`Using for loop ${arr[i]}`)
}
// time complexity O(n)
// space complexity O(1)

// for each
arr.forEach(function (element, index) {
    console.log(`Using for each ${element} at index ${index}`);
})
// time complexity O(n)
// space complexity O(1)

// for of
for (let element of arr) {
    console.log(`Using for of ${element}`);
}
// time complexity O(n)
// space complexity O(1)

// for in
for (let index in arr) {
    console.log(`Using for in ${arr[index]} at index ${index}`);
}
// time complexity O(n)
// space complexity O(1)

// Key differences between for...of and for...in
// What they iterate over:
// for...of: Values of iterable objects
// for...in: Enumerable properties of an object

// Use cases:
// for...of: Best for arrays and other iterables when you need the values
// for...in: Best for objects when you need to access both keys and values

// Order:
// for...of: Iterates in the order of the iterable
// for...in: Iterates in an arbitrary order(not guaranteed)

// Inherited properties:
// for...of: Only iterates over the object's own values
// for...in: Iterates over all enumerable properties, including inherited ones
