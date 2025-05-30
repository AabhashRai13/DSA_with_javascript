const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// Splice method
// arr.splice(0, 2)
// console.log(`deleting elements using splice ${arr}`)

// // time complexity O(n)
// // space complexity O(1)

// // shift method
// shift method is used to delete the first element of the array
// arr.shift()
// console.log(`deleting elements using shift ${arr}`)

// // time complexity O(n)
// // space complexity O(1)

// pop method
// pop method is used to delete the last element of the array
// arr.pop()
// console.log(`deleting elements using pop ${arr}`)

// // time complexity O(1)
// // space complexity O(1)

// // delete operator
// delete arr[0]
// console.log(`deleting elements using delete ${arr}`)

// // time complexity O(n)
// // space complexity O(1)

// filter method
// filter method is used to delete the elements of the array based on the condition
let filteredArray = arr.filter(element => element !== 2)
console.log(`deleting elements using filter ${filteredArray}`)

// time complexity O(n)             
// space complexity O(n)

// delete
// delete is used to delete the elements of the array based on the index
// delete arr[0]
// console.log(`deleting elements using delete ${arr}`)

// time complexity O(n)
// space complexity O(1)



