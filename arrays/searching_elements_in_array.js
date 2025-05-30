const arr = [1, 11, 3, 4, 5, 6, 7, 9, 10]

let found = arr.includes(5)
console.log(found)

// time complexity O(n)
// space complexity O(1)


function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i
        }
    }
    return "Element not found"
}

let result = linearSearch(arr, 5)
console.log(result)

// time complexity O(n)
// space complexity O(1)


// indexOf
let index = arr.indexOf(5)
console.log(index)

// time complexity O(n)
// space complexity O(1)
 
// find method
let foundElement = arr.find(element => element > 5)
console.log(`Found element ${foundElement}`)

// time complexity O(n)
// space complexity O(1)
