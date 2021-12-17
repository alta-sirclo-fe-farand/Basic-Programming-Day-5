const removeDuplicates = require("./problem5");

test("Test 1", () => {
  expect(removeDuplicates([2, 3, 3, 3, 6, 9, 9])).toEqual(4);
});
test("Test 2", () => {
  expect(removeDuplicates([2, 3, 4, 5, 6, 9, 9])).toEqual(6);
});
test("Test 3", () => {
  expect(removeDuplicates([2, 2, 2, 11])).toEqual(2);
});
test("Test 4", () => {
  expect(removeDuplicates([1, 1, 2, 2, 3, 3, 4, 4])).toEqual(4);
});
test("Test 5", () => {
  expect(removeDuplicates([1, 2, 3, 11, 11])).toEqual(4);
});
