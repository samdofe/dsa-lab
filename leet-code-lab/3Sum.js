const binarySearch = (arr, target)=>{
    if(!arr){return -1}
    let leftIndex = 0;
    let rightIndex = arr.length-1;

    while(leftIndex <= rightIndex){
        let middleIndex = Math.floor((leftIndex + rightIndex)/2);
        let middleValue = arr[middleIndex];
        if(target === middleValue){
            return middleIndex;
        }
        if(target < middleValue){
            rightIndex = middleIndex - 1;
        }else {
            leftIndex = middleIndex + 1;
        }
    }

    return -1;
}

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let pF = 0;
    let pS = pF + 1;
    let triplets = {};
    nums.sort((a,b)=> a-b);
    let pairSum = nums[pF]+nums[pS];

    while(pF < nums.length -2){
        pairSum = nums[pF]+nums[pS];
        let numberX = pairSum*(-1);
        let numXIndex = binarySearch(nums.slice(pS + 1), numberX);
        if(numXIndex > -1){
            if(!triplets[`${nums[pF]}${nums[pS]}${numberX}`]){
                triplets[`${nums[pF]}${nums[pS]}${numberX}`] = [nums[pF], nums[pS], numberX];
            }
        }
        if(pS >= nums.length - 2 || nums[pS] > numberX){
            while(nums[pF] === nums[pF + 1] && pF < nums.length - 2) pF++;
            if(pF < nums.length - 2){
                pF++;
                pS = pF + 1;
            }
        }else {
            while(nums[pS] === nums[pS + 1] && pS < nums.length -1) pS++;
            if(pS < nums.length -2){
                pS++;
            }
        }
    }

    return Object.entries(triplets).map(([key, value])=> value);
};

console.log(threeSum([-1,0,1,2,-1,-4]));
