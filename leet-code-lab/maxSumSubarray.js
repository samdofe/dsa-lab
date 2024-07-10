const arr = [1,9,-1,-2, 7, 3, -1, 2];

const maximumSumSubarray = (arr, k) => {
    let currentSum = 0;
    let maxSumSeen = -Infinity;

    for(let i=0; i<arr.length; i++){
        currentSum += arr[i];
        if(i >= k-1){
            maxSumSeen = Math.max(maxSumSeen, currentSum);
            currentSum -= arr[i - (k-1)];
        }
    }

    return maxSumSeen
};

console.log(maximumSumSubarray(arr, 4));
console.log(maximumSumSubarray([1,2,3,5,4,8,6,2], 3));
