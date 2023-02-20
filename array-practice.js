const findMinimum = arr => {

  // Time complexity is O(n) because for loops iterates over each element just once.
  // Space complexity is O(1) the space required is constant regardless of the arr length.

  // Using for loop to iterate through each element and compare it
  // to arr[i] if i is bigger set it to smallest and return the vale.

  // Your code here
  let smallest = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i];
    }
  }
  return smallest;
};

const runningSum = arr => {

  // Time complexity is O(n) because its just iterates once through all elements.
  // Space complexity is O(1) because it is proportional to arr length.
  // Set to variables and push to total Sum of index

  // Your code here

  const result = [];
  let total = 0;

  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
    result.push(total);
  }
  return result;
};

// Time complexity is O(n) because its just iterates once through all elements.
// Space complexity is O(1) because it is proportional to arr length.
// Using modulo add to count every char with is remainder of 2

const evenNumOfChars = arr => {

  // Your code here
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    let char = arr[i];
    if (char.length % 2 === 0) {
      count++;
    }
  }
  return count;
};

// Time Complexity is O(n2) due two nested for loops.
// Space Complexity is also O(n2) because of the pair comparison of two loops.
// Iterate through 2 loops compare i's , if one is bigger than other add to count
const smallerThanCurr = arr => {

  // Your code here
  let Array = [];

  for (let i = 0; i < arr.length; i++) {
    let count = 0;

    for (let j = 0; j < arr.length; j++) {
      if (arr[j] < arr[i]) {
        count++;
      }
    }
    Array.push(count)
  };
  return Array
}

// Time Complexity is equal to 0(n2)
// Space Complexity is equal to 0(n2)
// Iterate through 2 loops and if i' of both loops equal to target
// return true or false
const twoSum = (arr, target) => {

  // Your code here
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] + arr[i] === target) {
        return true
      }
    }
    return false
  }
};

// Time complexity is equal to O(n)
// Space complexity is equal to O(n)
// Sort from biggest to smallest substract second from 1st and return second i


const secondLargest = arr => {

  // Your code here
  if (arr.length < 2) return undefined
  return arr.sort((a, b) => b - a)[1];

};

//Time complexity is equal to O(n2)
// Space complexity is equal to O(n2)
//This function uses a Fisher-Yates shuffle algorithm to shuffle the array.

const shuffle = (arr) => {

  // Your code here
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};


module.exports = [findMinimum, runningSum, evenNumOfChars, smallerThanCurr, twoSum, secondLargest, shuffle];
