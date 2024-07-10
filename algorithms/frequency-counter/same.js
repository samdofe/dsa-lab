const same = (arr1, arr2)=>{
    if(arr1.length !== arr2.length){ return false;}
    const arr1Counter = {};
    const arr2Counter = {};

    for(let i=0; i<arr1.length;i++ ){
        arr1Counter[arr1[i]] = (arr1Counter[arr1[i]] || 0) + 1;
        arr2Counter[arr2[i]] = (arr2Counter[arr2[i]] || 0) + 1;
    }

    for(let [key, value] of Object.entries(arr1Counter)){
        if(key**2 in arr2Counter){
            if(value !== arr2Counter[key**2]){
                return false;
            }
        }
    }

    return true;
}

console.log(same([1,2,3], [4,1,9])); // true
console.log(same([1,2,3], [1,9])); // false
console.log(same([1,2,1], [4,4,1])); // false
