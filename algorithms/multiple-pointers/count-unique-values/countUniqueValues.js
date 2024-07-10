const countUniqueValues = (arr)=>{
    let counter = 0;
    let leftP = 0;

    while(leftP <= arr.length-1){
        if(arr[leftP] !== arr[leftP + 1]){
            counter++;
        }
        leftP++;
    }

    return counter;
}

console.log(countUniqueValues([1,1,1,1,1,2])); // 2
console.log(countUniqueValues([1,2,3,4,4,4,7,7,12,12,13])); // 7
console.log(countUniqueValues([])); // 0
console.log(countUniqueValues([-2.-1,-1,0,1])); // 4