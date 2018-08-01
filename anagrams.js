//input: a list of words
//function: check list for anagrams
//output: a list of sets of anagrams that are contained in a list

function createAnagrams(words){

    let anagrams = [];
    let wordsUsed = 0;
   
    for(let i = 0; i < words.length; i++){
        if(wordsUsed === words.length)
            break;
        
        letters = words[i].split("").sort().join("");
        anagrams.push([words[i]]);
        wordsUsed++;

        for(let j = i+1; j < words.length; j++){
           
            let lettersToCompare = words[j].split("").sort().join("");
            
            if(letters === lettersToCompare){
                anagrams[i].push(words[j]);
                wordsUsed++;
            }
            
            if(wordsUsed == words.length)
                break;
        }
      
    }
    return anagrams;

}

let arr = ['east', 'cars', 'acre', 'arcs', 'teas', 'eats', 'race'];
console.log(createAnagrams(arr));