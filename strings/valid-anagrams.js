var isAnagram = function (s, t) {
  if ([...s].length !== [...t].length) {
    return false;
  }
  // [...s] -> for unicode check

  const obj = {};

  for (const char of s) {
    obj[char] = (obj[char] || 0) + 1;
  }

  for (const char of t) {
    if (!obj[char]) {
      return false;
    }
    obj[char]--;
  }

  return true;
};
