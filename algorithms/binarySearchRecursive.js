const binarySearchRecursive = (arr, target) => {
    if(!arr || arr.length === 0) return -1;
    let leftIndex = 0;
    let rightIndex = arr.length -1;
    let middleIndex = Math.floor((leftIndex + rightIndex)/2);

    if(target === arr[middleIndex]){
        return middleIndex;
    }

    if(target < arr[middleIndex]){
        return binarySearchRecursive(arr.slice(leftIndex, middleIndex), target);
    }else {
        let index = binarySearchRecursive(arr.slice(middleIndex + 1), target);
        if(index > -1){
            return middleIndex + 1 + index;
        }else{
            return index;
        }

    }
}


const arr = [-5,2,4,6,10];

console.log(binarySearchRecursive(arr, -5));
console.log(binarySearchRecursive(arr, 2));
console.log(binarySearchRecursive(arr, 4));
console.log(binarySearchRecursive(arr, 6));
console.log(binarySearchRecursive(arr, 10));
console.log(binarySearchRecursive(arr, 20));
