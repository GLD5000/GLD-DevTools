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

2. Backwards Linear Search

- Time complexity O(n) - linear
- Iterates backwards through list or array to find first occurrence of a search term
- Can start from a given index (if supplied) or the end of an array

```
function backwardsLinearSearch({
    array,
    searchValue,
    currentIndex = searchValue.length - 1,
  }) {
    for (let i = currentIndex; i > -1; i -= 1) {
      if (array[i] === searchValue && (array[i - 1] !== searchValue || i === 0)) {
        return i;
      }
    }
    return -1;
  }
```

3. Binary search

- Time complexity O(log n) - logarithmic AKA divide and conquer
- Only works on sorted arrays
- Goes to mid point run comparison
- Ignores irrelevant half
- Goes to the mid point of the remaining subarray and repeats comparison etc.

```
function binarySearch(orderedArray, searchValue) {
  let left = 0;
  let right = orderedArray.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (orderedArray[mid] === searchValue) {
      return mid; // Or perform backwards linear search to find first occurrence
    } else if (orderedArray[mid] < searchValue) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
}
```

4. Jump Search

- Time Complexity O(sqrt(N)) - sub-linear
- Not as good as binary for sorted arrays - impractical
- Jumps an amount (usually Math.sqrt(N))
- Compares values
- Linearly steps back on overshoot to find match

```
function jumpSearch(orderedArray, searchValue) {
  const jumpSize = Math.floor(Math.sqrt(orderedArray.length));
  let jumper = jumpSize;

  while (jumper < orderedArray.length - 1) {
    if (orderedArray[jumper] === searchValue) {
      return jumper;
    } else if (orderedArray[jumper] > searchValue) {
      break;
    } else {
      jumper += jumpSize;
    }
  }
  jumper -= jumpSize;
  for (let i = jumper; i < orderedArray.length; i += 1) {
    if (orderedArray[i] === searchValue) {
      return i;
    } else if (orderedArray[i] > searchValue) {
      return -1;
    }
  }
  return -1;
}
```
