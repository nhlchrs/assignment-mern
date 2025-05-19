function longestIncreasingSubsequence(nums) {
  if (!Array.isArray(nums)) {
    throw new TypeError("Input must be an array of numbers.");
  }

  if (nums.length === 0) return 0;

  const lisLengths = new Array(nums.length).fill(1);

  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        lisLengths[i] = Math.max(lisLengths[i], lisLengths[j] + 1);
      }
    }
  }

  return Math.max(...lisLengths);
}

console.log(longestIncreasingSubsequence([10, 9, 2, 5, 3, 7, 101, 18]));  