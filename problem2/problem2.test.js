const caesar = require("./problem2");

test("Test 1", () => {
  expect(caesar(3, "abc")).toEqual("def");
});
test("Test 2", () => {
  expect(caesar(2, "alta")).toEqual("cnvc");
});
test("Test 3", () => {
  expect(caesar(10, "alterraacademy")).toEqual("kvdobbkkmknowi");
});
test("Test 4", () => {
  expect(caesar(1, "abcdefghijklmnopqrstuvwxyz")).toEqual(
    "bcdefghijklmnopqrstuvwxyza"
  );
});
test("Test 5", () => {
  expect(caesar(1000, "abcdefghijklmnopqrstuvwxyz")).toEqual(
    "mnopqrstuvwxyzabcdefghijkl"
  );
});
