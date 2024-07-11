//merge 2 order non-decreasing arrays
const merge = (arr1, arr2)=>{
    //edge cases
    // create 2 pointers to iterate the each element of both arrays
    let leftP = 0;
    let rightP = 0;
    //use a helper variable to save the result of comparing each element
    const result = [];

    //compare each element of the 2 arrays
    while(leftP < arr1.length && rightP < arr2.length){
        if(arr1[leftP] <= arr2[rightP]){
            result.push(arr1[leftP]);
            leftP++;
        }else{
            result.push(arr2[rightP]);
            rightP++;
        }
    }

    //When one of the arrays has been fully traverse, add whats left of the other
    // into the result
    while(leftP < arr1.length){
        result.push(arr1[leftP]);
        leftP++;
    }

    while(rightP < arr2.length){
        result.push(arr2[rightP]);
        rightP++;
    }

    // return resulting array
    return result;
}

const mergeSort = (arr)=>{
    //edge cases
    if(arr.length <= 1) {
        return arr;
    }
    // Get the middle index from the array
    const middleIndex = Math.floor((arr.length -1)/2);
    // iterate over the array and get the left side starting from the middle index
    const leftArray = mergeSort(arr.slice(0, middleIndex+1));
    // iterate over the array and get the right side starting from the middle index
    const rightArray = mergeSort(arr.slice(middleIndex+1));
    // return the merge from the left array and the right array
    return merge(leftArray, rightArray);

}

console.log(mergeSort([2,7,3,9,4,5,3]));