function findIndicesOfTargetSum(numbers, targetSum) {
  if (!Array.isArray(numbers)) {
    throw new TypeError("First argument must be an array.");
  }

  if (typeof targetSum !== "number") {
    throw new TypeError("Target must be a number.");
  }

  const numberToIndexMap = {}; 

  for (let currentIndex = 0; currentIndex < numbers.length; currentIndex++) {
    const currentNumber = numbers[currentIndex];
    const requiredPair = targetSum - currentNumber;

    if (numberToIndexMap.hasOwnProperty(requiredPair)) {
      return [numberToIndexMap[requiredPair], currentIndex];
    }

    numberToIndexMap[currentNumber] = currentIndex;
  }

  throw new Error("No two numbers add up to the target.");
}

console.log(findIndicesOfTargetSum([2, 7, 11, 15], 9)); 
