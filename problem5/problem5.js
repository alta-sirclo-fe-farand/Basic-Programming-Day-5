function removeDuplicates(array) {
  let uniques = [];
  for (let num of array) {
    if (uniques.includes(num) == false) {
      uniques.push(num);
    }
  }
  return uniques.length;
}

module.exports = removeDuplicates;
