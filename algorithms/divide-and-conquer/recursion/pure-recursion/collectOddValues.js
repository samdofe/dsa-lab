const collectOddValues = (arr) => {
    if(!arr.length) return arr;

    if(arr[0] % 2 !== 0){
        return [arr[0], ...collectOddValues(arr.slice(1))]
    }

    return [...collectOddValues(arr.slice(1))];
}

console.log(collectOddValues([1,2,3,4,5,6,7,8,9]));
