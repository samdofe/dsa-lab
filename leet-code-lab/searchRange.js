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
        let first = -1;
        let last = -1;

        while(leftI <= numsLng && (first < 0 || last < 0)){
            if(target === nums[leftI]){
                first = leftI;
            }else {
                leftI++;
            }
            if(target === nums[numsLng]){
                last = numsLng;
            }else {
                numsLng--;
            }
        }

        return [first, last];
    }
    if(target < middleValue){
        return searchRange(nums.slice(0, middleI), target);
    }else {
        const baseIndex = middleI + 1;
        let [firstTemp, lastTemp] =  searchRange(nums.slice(middleI+1), target);
        if(firstTemp >= 0){
            firstTemp += baseIndex;
            lastTemp += baseIndex;
        }

        return [firstTemp, lastTemp];
    }
};

const nums = [5,7,7,8,8,10];
console.log(searchRange(nums, 8)); //[3,4]
console.log(searchRange([5,7,7,8,8,8,10], 8)); //[3,4]
console.log(searchRange(nums, 7)); //[1,2]
console.log(searchRange(nums, 6)); // [-1, -1];
console.log(searchRange(nums, 9)); // [-1, -1];
console.log(searchRange([], 0)); // [-1, -1];

