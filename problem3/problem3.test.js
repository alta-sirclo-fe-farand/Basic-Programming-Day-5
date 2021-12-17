const arrayUnique = require("./problem3");

test("Test 1", () => {
  expect(arrayUnique([1, 2, 3, 4], [1, 3, 5, 10, 16])).toEqual([2, 4]);
});
test("Test 2", () => {
  expect(arrayUnique([10, 20, 30, 40], [5, 10, 15, 59])).toEqual([20, 30, 40]);
});
test("Test 3", () => {
  expect(arrayUnique([1, 3, 7], [1, 3, 5])).toEqual([7]);
});
test("Test 4", () => {
  expect(arrayUnique([3, 8], [2, 8])).toEqual([3]);
});
test("Test 5", () => {
  expect(arrayUnique([1, 2, 3], [3, 2, 1])).toEqual([]);
});
