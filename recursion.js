/** product: calculate the product of an array of numbers. */

function product(nums, idx = 0) {
  if (idx === nums.length) return 1;

  return nums[idx] * product(nums, idx + 1);
}

/** longest: return the length of the longest word in an array of words. */

function longest(words, idx = 0) {
  if (idx === words.length) return 0;

  return Math.max(words[idx].length, longest(words, idx + 1));
}

/** everyOther: return a string with every other letter. */

function everyOther(str, idx = 0, newStr = "") {
  if (idx === str.length) return newStr;

  if (idx % 2 === 0) newStr += str[idx];
  return everyOther(str, idx + 1, newStr);
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str, left = 0, right = str.length - left - 1) {
  if (left >= right) return true;

  if (str[left] !== str[right]) return false;

  return isPalindrome(str, left + 1);
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, idx = 0) {
  if (idx === arr.length) return -1;

  if (arr[idx] === val) return idx;

  return findIndex(arr, val, idx + 1);
}

/** revString: return a copy of a string, but in reverse. */

function revString(str, idx = str.length - 1, newStr = "") {
  if (idx < 0) return newStr;

  newStr += str[idx];

  return revString(str, idx - 1, newStr);
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj, resArr = []) {
  for (const prop in obj) {
    if (typeof obj[prop] === "object") {
      gatherStrings(obj[prop], resArr);
    }
    if (typeof obj[prop] === "string") {
      resArr.push(obj[prop]);
    }
  }

  return resArr;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val, left = 0, right = arr.length - 1) {
  if (left > right) return -1;

  const mid = left + Math.floor((right - left) / 2);

  if (val > arr[mid]) {
    return binarySearch(arr, val, mid + 1, right);
  } else if (val < arr[mid]) {
    return binarySearch(arr, val, left, mid - 1);
  } else {
    return mid;
  }
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch,
};
