
function hasTargetSum(array, target) {
  for (let i = 0; i < array.length; i++) {
    const complement = (target - array[i])
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] === complement) {
        return true
      }
    }
  }
  return false
}



// hasTargetSum([1, 3, 5, 20], 25);

/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
create a nested iteration like the comparing socks functions
if [i] + [j] = target integer, return true, else false

*/

/*
  Add written explanation of your solution here
  write a function that takes two arguments: an array of integer and a target integer
  the function should iterate over the array and return true if any 2 integers 
    add up to the target integer
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
