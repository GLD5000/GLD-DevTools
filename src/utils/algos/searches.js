const arrayToSearch = [
  1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 5, 5, 5,
  5, 6, 6, 6, 6, 6, 6, 6, 7, 7, 7, 7, 7, 7, 7, 8, 8, 8, 8, 8, 8, 8, 9, 9, 9, 10,
  10, 11, 12,
];

function jumpSearchWithLogs(orderedArray, searchValue) {
  let iterations = 0;
  const jumpSize = Math.floor(Math.sqrt(orderedArray.length));
  let jumper = jumpSize;

  while (jumper < orderedArray.length - 1) {
    iterations += 1;
    if (orderedArray[jumper] === searchValue) {
      return backwardsLinearSearchWithLogs({
        array: orderedArray,
        searchValue,
        currentIndex: jumper,
        iterations,
      });
    }
    if (orderedArray[jumper] > searchValue) {
      break;
    } else {
      jumper += jumpSize;
    }
  }
  jumper -= jumpSize;
  for (let i = jumper; i < orderedArray.length; i += 1) {
    iterations += 1;
    if (orderedArray[i] === searchValue) {
      return backwardsLinearSearchWithLogs({
        array: orderedArray,
        searchValue,
        currentIndex: i,
        iterations,
      });
    }
    if (orderedArray[i] > searchValue) {
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

// function jumpSearch(orderedArray, searchValue) {
//   const jumpSize = Math.floor(Math.sqrt(orderedArray.length));
//   let jumper = jumpSize;

//   while (jumper < orderedArray.length - 1) {
//     if (orderedArray[jumper] === searchValue) {
//       return backwardsLinearSearch({
//         array: orderedArray,
//         searchValue,
//         currentIndex: jumper,
//       });
//     } else if (orderedArray[jumper] > searchValue) {
//       break;
//     } else {
//       jumper += jumpSize;
//     }
//   }
//   jumper -= jumpSize;
//   for (let i = jumper; i < orderedArray.length; i += 1) {
//     if (orderedArray[i] === searchValue) {
//       return backwardsLinearSearch({
//         array: orderedArray,
//         searchValue,
//         currentIndex: i,
//       });
//     } else if (orderedArray[i] > searchValue) {
//       return -1;
//     }
//   }
//   return -1;
// }
for (let i = 0; i <= Math.max(...arrayToSearch); i += 1) {
  jumpSearchWithLogs(arrayToSearch, i);
}

// function binarySearch(orderedArray, searchValue) {
//   let left = 0;
//   let right = orderedArray.length - 1;

//   while (left <= right) {
//     const mid = Math.floor((left + right) / 2);
//     if (orderedArray[mid] === searchValue) {
//       return backwardsLinearSearch({
//         array: orderedArray,
//         searchValue,
//         currentIndex: mid,
//       });
//     } else if (orderedArray[mid] < searchValue) {
//       left = mid + 1;
//     } else {
//       right = mid - 1;
//     }
//   }
//   return -1;
// }

// function backwardsLinearSearch({
//   array,
//   searchValue,
//   currentIndex = searchValue.length - 1,
// }) {
//   for (let i = currentIndex; i > -1; i -= 1) {
//     if (array[i] === searchValue && (array[i - 1] !== searchValue || i === 0)) {
//       return i;
//     }
//   }
//   return -1;
// }
function backwardsLinearSearchWithLogs({
  array,
  searchValue,
  currentIndex = searchValue.length - 1,
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

function binarySearchWithLogs(orderedArray, searchValue) {
  let iterations = 0;
  let left = 0;
  let right = orderedArray.length - 1;

  while (left <= right) {
    iterations += 1;
    const mid = Math.floor((left + right) / 2);
    if (orderedArray[mid] === searchValue) {
      return backwardsLinearSearchWithLogs({
        array: orderedArray,
        searchValue,
        currentIndex: mid,
        iterations,
      });
    }
    if (orderedArray[mid] < searchValue) {
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

for (let i = 0; i <= Math.max(...arrayToSearch); i += 1) {
  binarySearchWithLogs(arrayToSearch, i);
}
