/* eslint-disable no-param-reassign */
function heapPermutation(data, n) {
  const dataCopy = [...data];
  if (n < 2) {
    console.log("Return Row", dataCopy);
    return;
  }

  for (let i = 0; i < n; i += 1) {
    console.log("heapPermutation(dataCopy, n - 1):", dataCopy, n - 1);
    heapPermutation(dataCopy, n - 1);
    if (n % 2 === 0) {
      console.log("even swap dataCopy[i], dataCopy[n - 1]", i, n - 1);
      [dataCopy[i], dataCopy[n - 1]] = [dataCopy[n - 1], dataCopy[i]]; // Swap elements
    } else {
      console.log("odd swap dataCopy[0], dataCopy[n - 1]", 0, n - 1);
      [dataCopy[0], dataCopy[n - 1]] = [dataCopy[n - 1], dataCopy[0]]; // Swap elements
    }
  }
}

const data = [1, 2, 3];
console.log("heapPermutation Start", data, data.length);
heapPermutation(data, data.length);
