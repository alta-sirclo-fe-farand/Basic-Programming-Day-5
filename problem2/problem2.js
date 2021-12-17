function caesar(offset, input) {
  let str = [];
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  for (i = 0; i < input.length; i++) {
    str.push(alphabet[(alphabet.indexOf(input[i]) + offset) % 26]);
  }
  return str.join("");
}

module.exports = caesar;
