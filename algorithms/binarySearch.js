const binarySearch = (arr, target) => {
     let leftIndex = 0;
     let rightIndex = arr.length - 1;

     while(leftIndex <= rightIndex) {
         const middleIndex = Math.floor((leftIndex + rightIndex) / 2);

         if(target === arr[middleIndex]){
             return middleIndex;
         }
         if(target < arr[middleIndex]){
             rightIndex = middleIndex - 1;
         }else {
             leftIndex = middleIndex + 1;
         }
     }

     return -1;
}

const arr = [-5,2,4,6,10];

console.log(binarySearch(arr, -5));
console.log(binarySearch(arr, 2));
console.log(binarySearch(arr, 4));
console.log(binarySearch(arr, 6));
console.log(binarySearch(arr, 10));
console.log(binarySearch(arr, 20));
