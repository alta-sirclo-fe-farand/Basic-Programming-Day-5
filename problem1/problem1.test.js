const compare = require("./problem1");

test("Test 1", () => {
  expect(compare("AKA", "AKASHI")).toEqual("AKA");
});
test("Test 2", () => {
  expect(compare("KANGAROO", "KANG")).toEqual("KANG");
});
test("Test 3", () => {
  expect(compare("KI", "KIJANG")).toEqual("KI");
});
test("Test 4", () => {
  expect(compare("KUPU-KUPU", "KUPU")).toEqual("KUPU");
});
test("Test 5", () => {
  expect(compare("ILALANG", "ILA")).toEqual("ILA");
});
