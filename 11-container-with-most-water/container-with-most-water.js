/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let left = 0;
    let right = height.length - 1;
    let max_area = 0;

    while (left < right) {
        // Calculate the width of the container
        const width = right - left;
        
        const min_height = Math.min(height[left], height[right]);
        // Calculate the current area
        const current_area = width * min_height;

        max_area = Math.max(max_area, current_area);

        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }

    return max_area;
};