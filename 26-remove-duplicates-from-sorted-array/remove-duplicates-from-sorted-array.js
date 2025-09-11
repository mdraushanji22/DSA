function removeDuplicates(nums) {
  let n = nums.length;
  if (n === 1) return 1;
  let j = 1;
  for (let i = 1; i < n; i++) {
    if (nums[i] !== nums[i - 1]) {
      nums[j] = nums[i];
      j++;
    }
  }
  return j;
}


