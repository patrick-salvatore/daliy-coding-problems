/* #1 
Given a list of numbers and a number k, return whether any two numbers from 
the list add up to k.

For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.

Bonus: Can you do this in one pass?
*/

function isSum(arr, k) {
    hashmap = {}

    for (let val of arr) {
        if (hashmap[val]) {
            return true
        } else {
            hashmap[k - val] = true
        }
    }
    return false;
}


/* #2
Given an array of integers, return a new array such that each element at index i
 of the new array is the product of all the numbers in the original array except 
 the one at i.

For example, if our input was [1, 2, 3, 4, 5], the expected output would be:
[120, 60, 40, 30, 24]. If our input was [3, 2, 1], 
the expected output would be [2, 3, 6].

Follow-up: what if you can't use division?
*/

function findProd(arr) {
    var output = [];
    var prod = 1;

    for (var i = 0; i < arr.length; i++) {
        output[i] = prod
        prod *= arr[i]
        // console.log(output);
    }

    prod = 1
    for (var i = arr.length - 1; i >= 0; i--) {
        output[i] *= prod
        prod *= arr[i]
        // console.log(output);
    }
    return output;
}

/* Note to self: the index should = the prodRight * prodLeft. 
first, initialize the output array = [] & trailer = 1. Set output[0] = trailer
set the trailer to be . 
*/

/* #3
Given an array of integers, find the first missing positive integer in linear time and constant space. 
In other words, find the lowest positive integer that does not exist in the array. 
The array can contain duplicates and negative numbers as well.
For example, the input [3, 4, -1, 1] should give 2. The input [1, 2, 0] should give 3.

You can modify the input array in-place.
*/

function findPosInt(arr) {
    sortedArr = arr.sort()

    // [1, 2, 0] --> [0, 1, 2]
    // [3, 4, -1, 1] --> [-1, 1, 3, 4]
    
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === i) {
            return arr[arr.length - 1] + 1;
        } else {
            for (var i = arr.length -1; i >= 0; i--) {
                if (arr[i] !== (i + 1)) {
                    return arr[i] + 1
                }
            }
        }
    }
}

