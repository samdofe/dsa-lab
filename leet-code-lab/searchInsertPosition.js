/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    return searchInsertExtended(nums, target, 0);
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @param {number} mappedIndex
 * @return {number}
 */
var searchInsertExtended = function(nums, target, mappedIndex){

    let leftI = mappedIndex;
    let rightI = mappedIndex + (nums.length - 1);
    let middleI = Math.floor((rightI - leftI)/2);
    let middleValue = nums[middleI];

    if(middleValue === target){
        return mappedIndex + middleI;
    }
    if(middleValue < target){
        return searchInsertExtended(nums.slice(middleI+1), target, mappedIndex + middleI + 1);
    }else{
        return searchInsertExtended(nums.slice(0, middleI), target, mappedIndex);
    }

}

const arr =[1,3,5,6];

/*console.log(searchInsert(arr, 5));
console.log(searchInsert(arr, 2));
console.log(searchInsert(arr, 7));*/
console.log(searchInsert([1,3], 2));

