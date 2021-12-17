function arrayUnique(arrayA, arrayB) {
  let unique = [];
  for (let ele of arrayA) {
    if (arrayB.includes(ele) == false) {
      unique.push(ele);
    }
  }
  return unique;
}

module.exports = arrayUnique;
