/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let leftP = 0;
    let rightP = leftP + 1;

    while(rightP < numbers.length){
        const currentSum = numbers[leftP] + numbers[rightP];
        if(target === currentSum){
            return [leftP+1, rightP+1];
        }
        rightP++;
        if(rightP === numbers.length && leftP < numbers.length-1){
            leftP++;
            rightP = leftP+1;
        }
    }

    return [-1, -1];
};

console.log(twoSum([2,7,11,15], 9)); // [1,2]
console.log(twoSum([2,3,4], 6)); //[1,3]
console.log(twoSum([-1, 0], -1)); //[1,2]
