const search = (arr, target) => {
    let leftIndex = 0;
    let rightIndex = arr.length-1;

    while(leftIndex <= rightIndex) {
        let middle = Math.floor((leftIndex + rightIndex) / 2);
        if(target === arr[middle]){
            return middle
        }
        if(target < arr[middle]){
            rightIndex = middle - 1;
        }else{
            leftIndex = middle + 1;
        }

    }

    return -1
}

console.log(search([1,2,3,4,5,6], 4)); // 3
console.log(search([1,2,3,4,5,6], 6)); // 5
console.log(search([1,2,3,4,5,6], 11)); // -1
