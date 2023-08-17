// ## **Quick Question #1**

// What does the following code return?

new Set([1,1,2,2,3,4]) // {1,2,3,4}

// ## **Quick Question #2**

// What does the following code return?
// [...new Set("referee")].join("") // "ref"

// ## **Quick Questions #3**

// What does the Map ***m*** look like after running the following code?
let m = new Map();
m.set([1,2,3], true);
m.set([1,2,3], false);

/*
  0: {Array(3) => true}
  1: {Array(3) => false}
*/

// ## **hasDuplicate**

// Write a function called hasDuplicate which accepts an array and returns true or false if that array contains a duplicate
// size() checks to see how many unique elements are in a set
const hasDuplicate = arr => new Set(arr).size !== arr.length

// ## **vowelCount**

// Write a function called vowelCount which accepts a string and returns a map where the keys are numbers and the values are the count of the vowels in the string.

// checks if "aeiou" is included in the char
const isVowel = char => "aeiou".includes(char)

// creates a new map
// we loop the length of the str
    // convert the each char to lower case (lowerChar)
    // checks if (run our fun) isVowel on our lowerChar
        // then check if lowerChar is in the map
            // then set lower as key and get lowerChar and + 1 each time to its value
        // else set key lowerChar and val as 1
// return our map
const vowelCount = str => {
    const newMap = new Map();
    for(let char of str){
        let lowerChar = char.toLowerCase()
        if(isVowel(lowerChar)) {    
            if(newMap.has(lowerChar)) {
                newMap.set(lowerChar, newMap.get(lowerChar) + 1);
            } else {
              newMap.set(lowerCaseChar, 1);
            }
          }
        }
    return newMap;
} 
            