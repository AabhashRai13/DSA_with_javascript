// findIndex
// Write a function findIndex that takes a sorted array of integers and a target value.
// The function should return the index of the target value if it exists in the array,
//  otherwise return -1.

// Example Input / Output:
// findIndex([1, 3, 5, 7, 9], 5) // Output: 2
// findIndex([1, 3, 5, 7, 9], 8) // Output: -1

function findIndex(arr, target) {
    let foundIndex;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            foundIndex = i;
            return foundIndex;
        }
    }

    return -1;

}

findIndex([1, 2, 3, 4, 5], 4)