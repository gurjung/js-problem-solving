var removeDuplicates = function (nums) {
  if (nums.length === 0) return 0;

  let left = 0;

  for (let right = 1; right < nums.length; right++) {
    if (nums[left] !== nums[right]) {
      left++;
      nums[left] = nums[right];
    }
  }

  return left + 1;
};
