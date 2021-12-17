function findMaxSumSubArray(k, arr) {
  let max = 0;
  for (i = 0; i < arr.length-k; i++) {
    subarray = [];
    for (j = 0; j < k; j++) {
      subarray.push(arr[i + j]);
    }
    let sum = subarray.reduce(function (a, b) {
      return a + b;
    }, 0);
    if (max < sum) {
      max = sum;
    }
  }
  return max;
}

module.exports = findMaxSumSubArray;
