// Inserting elements into an array

const arr = [1, 2, 3, 4, 5]
// arr.push(6)
// arr.push(7)
// time complexity O(1)
// space complexity O(1)

//arr.unshift(0)
// time complexity O(n)
// space complexity O(1)

//The splice() method is used to modify an array by adding, removing, or replacing elements.
//array.splice(startIndex, deleteCount, item1, item2, ...)
arr.splice(2, 0, 6, 7)
// time complexity O(n)
// space complexity O(1)

console.log(arr)

