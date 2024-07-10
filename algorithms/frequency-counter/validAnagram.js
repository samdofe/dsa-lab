const validAnagram = (str1, str2)=>{
    if(str1.length !== str2.length){return false}
    if(!(str1.length && str2.length)){ return true}
    let fcStrings = {};

    for(let char of str1){
        fcStrings[char] = (fcStrings[char] || 0) + 1;
    }

    for(let char of str2){
        if(char in fcStrings){
            fcStrings[char]--;
        }else{
            return false;
        }
    }

    for(let value of Object.values(fcStrings)){
        if(value !== 0){
            return false;
        }
    }

    return true;
}

console.log(validAnagram('', '')); // true
console.log(validAnagram('aaz', 'zza')); //false
console.log(validAnagram('anagram', 'nagaram')); // true
console.log(validAnagram('rat', 'car')); // false
console.log(validAnagram('awesome', 'awesom')); //false
console.log(validAnagram('qwerty', 'qeywrt')); //true
console.log(validAnagram('texttwisttime', 'timetwisttext')); // true
