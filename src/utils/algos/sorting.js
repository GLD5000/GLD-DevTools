/* eslint-disable no-param-reassign */

export function bubbleSort(arr) {
  const n = arr.length;
  for (let i = 0; i < n - 1; i += 1) {
    for (let j = 0; j < n - i - 1; j += 1) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}
export function insertionSort(arr) {
  for (let i = 1; i < arr.length; i += 1) {
    const key = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j -= 1;
    }
    arr[j + 1] = key;
  }
  return arr;
}
export function selectionSort(arr) {
  const n = arr.length;
  for (let i = 0; i < n - 1; i += 1) {
    let minIndex = i;
    for (let j = i + 1; j < n; j += 1) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
  }
  return arr;
}

export function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    const pivotIndex = partition(arr, left, right);
    quickSort(arr, left, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, right);
  }
  return arr;
}

export function partition(arr, left, right) {
  const pivot = arr[right];
  let i = left - 1;
  for (let j = left; j < right; j += 1) {
    if (arr[j] < pivot) {
      i += 1;
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }
  [arr[i + 1], arr[right]] = [arr[right], arr[i + 1]];
  return i + 1;
}

export function bucketSort(arr, bucketSize = 5) {
  if (arr.length === 0) {
    return arr;
  }

  const minValue = Math.min(...arr);
  const maxValue = Math.max(...arr);

  const bucketCount = Math.floor((maxValue - minValue) / bucketSize) + 1;
  const buckets = new Array(bucketCount);
  for (let i = 0; i < bucketCount; i += 1) {
    buckets[i] = [];
  }

  arr.forEach((num) => {
    const bucketIndex = Math.floor((num - minValue) / bucketSize);
    buckets[bucketIndex].push(num);
  });

  let sortedArray = [];
  buckets.forEach((bucket) => {
    insertionSort(bucket);
    sortedArray = sortedArray.concat(bucket);
  });

  return sortedArray;
}

export function getMax(arr) {
  let max = arr[0];
  arr.forEach((num) => {
    if (num > max) {
      max = num;
    }
  });
  return max;
}

export function countingSortForRadix(arr, exp) {
  const output = new Array(arr.length).fill(0);
  const count = new Array(10).fill(0);

  arr.forEach((num) => {
    count[Math.floor(num / exp) % 10] += 1;
  });

  for (let i = 1; i < 10; i += 1) {
    count[i] += count[i - 1];
  }

  for (let i = arr.length - 1; i >= 0; i -= 1) {
    output[count[Math.floor(arr[i] / exp) % 10] - 1] = arr[i];
    count[Math.floor(arr[i] / exp) % 10] -= 1;
  }

  for (let i = 0; i < arr.length; i += 1) {
    arr[i] = output[i];
  }
}

export function radixSort(arr) {
  const max = getMax(arr);
  for (let exp = 1; Math.floor(max / exp) > 0; exp *= 10) {
    countingSortForRadix(arr, exp);
  }
  return arr;
}

export function countingSort(arr) {
  const max = Math.max(...arr);
  const countArray = new Array(max + 1).fill(0);

  arr.forEach((num) => {
    countArray[num] += 1;
  });

  const sortedArray = [];
  countArray.forEach((count, num) => {
    for (let i = 0; i < count; i += 1) {
      sortedArray.push(num);
    }
  });

  return sortedArray;
}

export function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const middle = Math.floor(arr.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
}

export function merge(left, right) {
  const result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex += 1;
    } else {
      result.push(right[rightIndex]);
      rightIndex += 1;
    }
  }

  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}
export function heapify(arr, n, i) {
  let largest = i;
  const left = 2 * i + 1;
  const right = 2 * i + 2;

  if (left < n && arr[left] > arr[largest]) {
    largest = left;
  }

  if (right < n && arr[right] > arr[largest]) {
    largest = right;
  }

  if (largest !== i) {
    [arr[i], arr[largest]] = [arr[largest], arr[i]];
    heapify(arr, n, largest);
  }
}

export function heapSort(arr) {
  const n = arr.length;

  for (let i = Math.floor(n / 2) - 1; i >= 0; i -= 1) {
    heapify(arr, n, i);
  }

  for (let i = n - 1; i > 0; i -= 1) {
    [arr[0], arr[i]] = [arr[i], arr[0]];
    heapify(arr, i, 0);
  }

  return arr;
}
