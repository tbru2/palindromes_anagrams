//input: String
//function: check all permutations of a string for palindromes
//output: list of palindromes contained in string

function isPalindrome(word){
    let wordArr = word.split("");
   
    for(let j = 0; j < Math.floor(wordArr.length / 2); j++){
        if(wordArr[j] !== wordArr[wordArr.length-j-1])
            return false;
    }
    return true;
}

function permutate(word, left, right, anagrams){
    if(left === right){
        if(isPalindrome(word))
            anagrams.add(word);
        return anagrams;
    }
    else{
        for(let i = left; i <= right; i++){
            word = swap(word, left, i);
            permutate(word, left+1, right, anagrams);
            word = swap(word, left, i);
        }
    }
    return anagrams;
}

function swap(word, left, right){
    let arr = word.split("");
    let temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;
    
    return arr.join("");
}  

console.log(permutate("acecarr",0, "acecarr".length-1, new Set()));

