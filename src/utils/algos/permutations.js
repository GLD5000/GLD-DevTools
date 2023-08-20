/* eslint-disable no-param-reassign */
function heapPermutation(data, n) {
  console.log("n:", n);
  if (n < 2) {
    return;
  }

  for (let i = 0; i < n; i += 1) {
    heapPermutation(data, n - 1);
    if (n % 2 === 0) {
      [data[i], data[n - 1]] = [data[n - 1], data[i]]; // Swap elements
    } else {
      [data[0], data[n - 1]] = [data[n - 1], data[0]]; // Swap elements
    }
  }
}

const data = [1, 2, 3];
heapPermutation(data, data.length);
