function compare(a, b) {
  let short = a.length < b.length ? a : b;
  let long = short == a ? b : a;
  if (long.includes(short)) {
    return short;
  }
}

module.exports = compare;
