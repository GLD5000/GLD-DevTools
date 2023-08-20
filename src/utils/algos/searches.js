export function linearSearch(array) {
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] === searchValue) return i;
  }
  return -1;
}

export function jumpSearchWithLogs({ array, searchValue }) {
  let iterations = 0;
  const jumpSize = Math.floor(Math.sqrt(array.length));
  let jumper = jumpSize;

  while (jumper < array.length - 1) {
    iterations += 1;
    if (array[jumper] === searchValue) {
      return backwardsLinearSearchWithLogs({
        array,
        searchValue,
        currentIndex: jumper,
        iterations,
      });
    }
    if (array[jumper] > searchValue) {
      break;
    } else {
      jumper += jumpSize;
    }
  }
  jumper -= jumpSize;
  for (let i = jumper; i < array.length; i += 1) {
    iterations += 1;
    if (array[i] === searchValue) {
      return backwardsLinearSearchWithLogs({
        array,
        searchValue,
        currentIndex: i,
        iterations,
      });
    }
    if (array[i] > searchValue) {
      console.log(
        "iterations:",
        iterations,
        "searchValue:",
        searchValue,
        "result:",
        -1,
      );

      return -1;
    }
  }
  console.log(
    "sqrt(N):",
    jumpSize,
    "searchValue:",
    searchValue,
    "iterations:",
    iterations,
    "result:",
    -1,
  );
  return -1;
}

export function jumpSearch({ array, searchValue }) {
  const jumpSize = Math.floor(Math.sqrt(array.length));
  let jumper = jumpSize;

  while (jumper < array.length - 1) {
    if (array[jumper] === searchValue) {
      return backwardsLinearSearch({
        array,
        searchValue,
        currentIndex: jumper,
      });
    }
    if (array[jumper] > searchValue) {
      break;
    } else {
      jumper += jumpSize;
    }
  }
  jumper -= jumpSize;
  for (let i = jumper; i < array.length; i += 1) {
    if (array[i] === searchValue) {
      return backwardsLinearSearch({
        array,
        searchValue,
        currentIndex: i,
      });
    }
    if (array[i] > searchValue) {
      return -1;
    }
  }
  return -1;
}

export function binarySearch({ array, searchValue }) {
  let left = 0;
  let right = array.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (array[mid] === searchValue) {
      return backwardsLinearSearch({
        array,
        searchValue,
        currentIndex: mid,
      });
    }
    if (array[mid] < searchValue) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
}

export function backwardsLinearSearch({
  array,
  searchValue,
  currentIndex = array.length - 1,
}) {
  for (let i = currentIndex; i > -1; i -= 1) {
    if (array[i] === searchValue && (array[i - 1] !== searchValue || i === 0)) {
      return i;
    }
  }
  return -1;
}
export function backwardsLinearSearchWithLogs({
  array,
  searchValue,
  currentIndex = array.length - 1,
  iterations = 0,
}) {
  let iterationCount = iterations;
  for (let i = currentIndex; i > -1; i -= 1) {
    iterationCount += 1;
    if (array[i] === searchValue && (array[i - 1] !== searchValue || i === 0)) {
      console.log(
        "iterationCount:",
        iterationCount,
        "searchValue:",
        searchValue,
        "result:",
        i,
      );
      return i;
    }
  }
  console.log(
    "iterationCount:",
    iterationCount,
    "searchValue:",
    searchValue,
    "result:",
    currentIndex,
  );
  return -1;
}

export function binarySearchWithLogs({ array, searchValue }) {
  let iterations = 0;
  let left = 0;
  let right = array.length - 1;

  while (left <= right) {
    iterations += 1;
    const mid = Math.floor((left + right) / 2);
    if (array[mid] === searchValue) {
      return backwardsLinearSearchWithLogs({
        array,
        searchValue,
        currentIndex: mid,
        iterations,
      });
    }
    if (array[mid] < searchValue) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  console.log(
    "iterations:",
    iterations,
    "searchValue:",
    searchValue,
    "result:",
    -1,
  );

  return -1;
}

export function arraysMatch(arrayA, arrayB) {
  return arrayA.every(
    (value, index) => value === arrayB[Math.min(index, arrayB.length - 1)],
  );
}

export function arrayIsSubset(array, subsetCandidate) {
  return subsetCandidate.every((value) => array.includes(value));
}
// Array is ordered subset
