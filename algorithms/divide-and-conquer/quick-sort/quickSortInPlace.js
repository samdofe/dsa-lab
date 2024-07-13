/**
 * THIS IS THE IN PLACE SOLUTION - Space complexity of O(1) - constant
 * **/
// function that select a pivot element in the array and traverse it, setting all the less element in the left
// and all the greater elementsd in the right
const pivot = (arr, startIdx = 0, endIdx = arr.length - 1) => {
    //[4,6,9,1,2,5,3]
    //[4,1,2,3,9,5,6]
    //[3,1,2,4,9,5,6]
    //Set the random pivot from the array: in this case the first element
    let pivot = arr[startIdx];
    //Set the default swapped index equal to start index
    let swappedIdx = startIdx;
    // Iterate over the array, from the second element all the way to the last element
    // - If the current element is less than the pivot: increase the swapped index by 1
    // and swap the current element with the element in the swapped index
    // - If the current element is greater than the pivot, do nothing because we are already at the right
    for(let i = startIdx + 1; i <= endIdx; i++ ){
        if(arr[i] < pivot){
            swappedIdx++;
            [arr[swappedIdx], arr[i]] = [arr[i], arr[swappedIdx]];
        }
    }
    // We swapped the last element in the swapped index with our pivot
    [arr[startIdx], arr[swappedIdx]] = [arr[swappedIdx], arr[startIdx]];
    // return the index
    return swappedIdx;
}

const quickSortInPlace = (arr, startIdx = 0, endIdx = arr.length - 1) => {
    //edge cases : if there is at least one element in the array then ->
    if(startIdx < endIdx){
        //Get the pivot index from the array : middle index
        let pivotIdx = pivot(arr, startIdx, endIdx);
        //Use the middle index to traverse the left side of the array and quickSort it
        quickSortInPlace(arr, startIdx, pivotIdx - 1);
        //Use the middle index to traverse the right side of the array and quickSort it
        quickSortInPlace(arr, pivotIdx + 1, endIdx);
    }
    //return the quick sorted array
    return arr;
}
const arr = [4,6,9,1,2,5,3]

console.log(quickSortInPlace(arr));

