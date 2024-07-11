/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {number[]} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {

    nums1 = nums1.slice(0, m);
    nums2 = nums2.slice(0, n);
    let sorted = [];

    while(nums1.length > 0 && nums2.length > 0){
        if(nums1[0] <= nums2[0]){
            sorted.push(nums1.shift());
        }else {
            sorted.push(nums2.shift());
        }
    }

    nums1 = [...sorted, ...nums1, ...nums2];

    return nums1;

};

var removeElement = function(nums, val) {
    let i = 0;
    while(i<nums.length){
        if(nums[i] === val){
            nums.splice(i, 1);
        }
        i++;
    }

    return nums;
};

var removeDuplicates = function(nums) {
    if(nums.length < 1) return 0;
    let i = 1;
    let lastNum = nums[0] // [1,1,2]
    let temp = [lastNum];
    while(i < nums.length){// 3
        if(nums[i] !== lastNum){
            lastNum = nums[i];
            temp.push(lastNum);
        }
        i++;
    }

    nums = temp;
    return nums;
};

console.log(removeDuplicates([1,1,2]));
//console.log(removeElement([0,1,2,2,3,0,4,2], 2));


const arr1 = [1,2,3,0,0,0];
const arr2 = [2,5,6];

console.log(merge(arr1, 3, arr2, 3));
