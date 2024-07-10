/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    if(nums.length < 1) return [-1, -1];
    let leftI = 0;
    let numsLng = nums.length - 1;
    const middleI =Math.floor((numsLng - leftI)/2);
    const middleValue = nums[middleI];

    if(target === middleValue){
        range.push(middleValue);
        range.push(searchRange(nums.splice(middleI, 1), target))
    }
    if(target < middleValue){
        return searchRange(nums.slice(0, middleI), target);
    }else {
        return middleI + 1 + searchRange(nums.slice(middleI+1), target);
    }
};

const nums = [5,7,7,8,8,10];
console.log(searchRange(nums, 8)); //[3,4]
console.log(searchRange([5,7,7,8,8,8,10], 8)); //[3,4]
console.log(searchRange(nums, 7)); //[1,2]
console.log(searchRange(nums, 6)); // [-1, -1];
console.log(searchRange(nums, 9)); // [-1, -1];
console.log(searchRange([], 0)); // [-1, -1];

