// Problem Description – Chunk Array
//
// When dealing with large datasets, it's often necessary to process them
// in smaller batches (chunks) to avoid overloading the CPU or I/O.
//
// Your task is to implement a function `chunkArray(array, size)` that
// splits an array into sub-arrays of a maximum specified size.
//
// Requirements:
// 1. The function should return a new array containing the chunks.
// 2. The last chunk might be smaller than the specified size.
// 3. Handle edge cases like empty arrays or chunk size <= 0.
//
// This is a prerequisite for common patterns like batching API calls.

function chunkArray(array, size) {
    let n=array.length;
    while(n>=0){
        const trimmed=array.slice(0,size);
        return trimmed;
    }
}
let array=[1,2,3,4,5,6,7,8,9,10]
console.log(chunkArray(array,2));
module.exports = chunkArray;
