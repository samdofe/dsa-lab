/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    if(nums.length === 0) return 0;
    let leftI = 0;
    let rightI = nums.length -1;
    let middleI = Math.floor((rightI - leftI) / 2);
    let middleValue = nums[middleI];

    if(target === middleValue){
        return middleI;
    }
    if(target < middleValue){
        return searchInsert(nums.slice(0, middleI), target);
    }else{
        return middleI + 1 + searchInsert(nums.slice(middleI + 1), target);
    }
};

const arr = [1,3,5,6];

console.log(searchInsert(arr, 5)); //2
console.log(searchInsert(arr, 2)); //1
console.log(searchInsert(arr, 7)); //4
