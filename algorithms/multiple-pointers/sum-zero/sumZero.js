const sumZero = (arr) => {
    let leftP = 0;
    let rightP = arr.length -1;

    while(leftP < rightP){
        const result = arr[leftP] + arr[rightP];
        if(!result){
            return [arr[leftP], arr[rightP]];
        }
        if(result < 0){
            leftP++;
        }else{
            rightP--;
        }
    }

    return undefined;
}

const exampleArr = [-3,-2,-1,0,1,2,3];

console.log(sumZero([-3,-2,-1,0,1,2,3])); // [-3,3]
console.log(sumZero([-2,0,1,3])); // undefined
console.log(sumZero([1,2,3])); // undefined
console.log(sumZero([-4,-3,-2,-1,0,1,2,3,10])); // undefined

