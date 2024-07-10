const maxSubarraySum = (arr, n) => {
    if(!arr.length) {return null}
    // set a maxSum adn pointers
    let leftIndex = 0;
    let rightIndex = 0;
    let maxSum = 0;
    let currentSum = 0;

    while(rightIndex <= arr.length -1){
        if(rightIndex < n){
            currentSum += arr[rightIndex];
        }else{
            currentSum = currentSum - arr[leftIndex];
            leftIndex++;
            currentSum = currentSum + arr[rightIndex]
        }
        if(maxSum < currentSum){
            maxSum = currentSum;
        }
        rightIndex++;
    }

    return maxSum;
}

console.log(maxSubarraySum([1,2,5,2,8,1,5], 2)) // 10
console.log(maxSubarraySum([1,2,5,2,8,1,5], 4)) // 17
//                                    L
console.log(maxSubarraySum([4,2,1,6], 1)) // 6
//                                       R
console.log(maxSubarraySum([4,2,1,6,2], 4)) // 13
console.log(maxSubarraySum([], 4)) // null