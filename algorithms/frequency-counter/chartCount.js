const charCount = (str)=> {
    // create a object to return the counts
    let lettersCount = {};
    for(let char of str){
        if(isAlphaNumeric(char)){
            char = char.toLowerCase();
            lettersCount[char] = (lettersCount[char] || 0) + 1;
        }
    }
    // iterate every char
        // if char is a letter / number and it doesnt exists in my object to return, I'll add it
        // if chasr is a letter/ number and it does exists in my object, I'll increment the count on that object
    // return the object
    return lettersCount;
}

const isAlphaNumeric = (char)=>{
    const code = char.charCodeAt(0);

    return (code > 47 && code < 58) || (code > 64 && code < 91) || (code > 96 && code < 123);

}

console.log(charCount('Your PIN number is 1234!'));
