/* eslint-disable no-param-reassign */
function heapPermutation(data, n) {
  if (n < 2) {
    console.log("Return Row", data);
    return;
  }

  for (let i = 0; i < n; i += 1) {
    console.log("heapPermutation(data, n - 1):", data, n - 1);
    heapPermutation(data, n - 1);
    if (n % 2 === 0) {
      console.log("even swap data[i], data[n - 1]", i, n - 1);
      [data[i], data[n - 1]] = [data[n - 1], data[i]]; // Swap elements
    } else {
      console.log("odd swap data[0], data[n - 1]", 0, n - 1);
      [data[0], data[n - 1]] = [data[n - 1], data[0]]; // Swap elements
    }
  }
}

const data = [1, 2, 3];
console.log("heapPermutation Start", data, data.length);
heapPermutation(data, data.length);
