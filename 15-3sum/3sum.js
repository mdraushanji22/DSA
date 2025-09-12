function threeSum(nums) {
  const result = new Set();

  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 2; i++) {
    let left = i + 1;
    let right = nums.length - 1;
    const element = nums[i];
    while (left < right) {
      const sum = element + nums[left] + nums[right];
      if (sum === 0) {
        result.add([element, nums[left], nums[right]].join(",")); // e.g. "-1,0,1"
        left++;
        right--;
      } else if (sum < 0) {
        left++;
      } else {
        right--;
      }
    }
  }

  return Array.from(result).map(item => item.split(",").map(num => +num));
}
