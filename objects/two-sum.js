// BRUTE FORCE

var twoSum = function(nums, target) {
  for (let left = 0; left < nums.length; left++) {
    for (let right = left + 1; right < nums.length; right++) {
      if (nums[left] + nums[right] === target) {
        return [left, right];
      }
    }
  }
  return [];
};

// HASH MAP APPROACH

var twoSum = function(nums, target) {
    const obj = {};
    
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        
        if (complement in obj) {
            return [obj[complement], i];
        }
        
        obj[nums[i]] = i;
    }
};


// USING MAP DATA SET
// TODO
