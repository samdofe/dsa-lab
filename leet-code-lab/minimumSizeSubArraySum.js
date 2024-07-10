/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSizeSubarraySum = function(nums, target) {
    if(nums.length < 1) return 0;
    let leftPtr = 0;
    let rightPtr = 0;
    let currentSize = 1;
    let minimumSize = 0;
    let currentSum = nums[leftPtr];

    while(rightPtr < nums.length){
        if(currentSum < target){
            rightPtr++;
            currentSize++;
            currentSum += nums[rightPtr];
        }else {
            minimumSize = minimumSize === 0 ? currentSize : Math.min(currentSize, minimumSize);
            leftPtr++;
            currentSize--;
            currentSum = currentSum - nums[leftPtr-1];
        }
    }

    return minimumSize;
};

console.log(minSizeSubarraySum([2,3,1,2,4,3], 7));
console.log(minSizeSubarraySum([1,2,3,4,5], 11));
console.log(minSizeSubarraySum([1,2,3,4,5], 15));
console.log(minSizeSubarraySum([1,1,1,1,7], 7));

