/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numberOfSubarrays = function(nums, k) {
    let i = 0, j = 0;
    let oddCount = 0;
    let subArrayCount = 0;
    let temp = 0;

    while(j < nums.length) {
        if(nums[j] % 2 === 1) {
            oddCount++;
            temp = 0;
        }

        while(oddCount === k) {
            temp++;
            if(nums[i] % 2 === 1) {
                oddCount--;
            }
            i++;
        }
        subArrayCount += temp;
        j++;
    }
    return subArrayCount;
};

// Test cases
//console.log(numberOfSubarrays([1,1,2,1,1], 3)); // Output: 2
//console.log(numberOfSubarrays([2,4,6], 1)); // Output: 0
console.log(numberOfSubarrays([2,2,2,1,2,2,1,2,2,2], 2)); // Output: 16

