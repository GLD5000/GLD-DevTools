# JavaScript Search Algorithms

## With examples

1. Linear search

- Time complexity O(n) - linear
- Iterates through each item in array or list to query against search parameter

```
for (let i =0; i < array.length; i += 1 ){
    if (array[i] === searchValue) return i;
}
return -1;
```

2. Binary search

- Time complexity O(log n) - logarithmic AKA divide and conquer
- Only works on sorted arrays
- Goes the mid point run comparison
- Discards irrelevant half
- Goes to the mid point of the remaining subarray and repeats comparison etc.

```
let left = 0
let right = orderedArray.length -1;

while (left <= right){
    const mid = Math.floor((left + right) /2);
    if (mid === target) {
         return mid;
    } else if (orderedArray[mid] < target){
        left = mid + 1;
    } else {
        right = mid - 1;
    }
}

return -1;

```
