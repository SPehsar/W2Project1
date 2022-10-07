// 1. This function takes two numbers as arguments and returns the largest of them. 
//    If they are the same, return that number. 
function maxOfTwoNumbers(x, y) {
    if (x >= y) {
      return x;
    } else {
      return y;
    }
}
    
console.log(maxOfTwoNumbers(3, 9));  // output is 9


  
  // 2. The maxofThree function takes three numbers as arguments 
  //    and returns the largest of them. 
  function maxOfThree(x, y, z) {
    if (x >= y) {
        if (x >= z) {
            return x;
        } else {
            return z
        }
    } else if (y >= z) {
      return y;
    } else {
        return z
    }
  }

  console.log(maxOfThree(3, 9, 10));  // output is 10



// 3. Function isCharAVowel takes a character as an argument 
//    and returns true if it is a vowel, false otherwise.
function isCharAVowel(oneCharacter) {
    if ( oneCharacter.toLowerCase() === "a" || oneCharacter.toLowerCase() === "i" ||oneCharacter.toLowerCase() === "o" || oneCharacter.toLowerCase() === "u" || oneCharacter.toLowerCase() === "e") {
        return true
    } else  {
      return false;
    }
}
console.log(isCharAVowel("o"))    // Output is true
console.log(isCharAVowel("d"))    // Output is false
console.log(isCharAVowel("A"))    // Output is true
console.log(isCharAVowel("H"))    // Output is false



// // 4. Function sumArray, as a function expression, takes an array of numbers 
// //    and returns the sum of those numbers. For example, sumArray([2, 4, 5]);would return 11.

const sumArray = (numArray) => {
        let sumOfArrayNumbers = 0;
        for (let count = 0; count < numArray.length; count++) {
            sumOfArrayNumbers += numArray[count];
        }
        return sumOfArrayNumbers;
      }
      
console.log(sumArray([2, 4, 5]));   // Output is 11
console.log(sumArray([]));   // Output is 0



// // 5. Function multiplyArray, as a function declaration, takes an array of numbers 
// //    and returns the product of those numbers. 
// //    For example, multiplyArray([2, 4, 5]);would return 40.

function multiplyArray(numArray) {
        let productOfArrayNumbers = 1;
        if(numArray.length !== 0){
            for (let count = 0; count < numArray.length; count++) {
                 productOfArrayNumbers *= numArray[count];
            }
            return productOfArrayNumbers;
        } else{
            return null
        }
    }     
      
console.log(multiplyArray([2, 4, 5]));  // Output is 40
console.log(multiplyArray([]));   // Output is null



// 6. Function numArgs, as a function expression, returns 
//    the number of arguments passed to the function when called.

const ArgCounter = (...Args) => {
	return Args.length;
}
console.log(ArgCounter());        // Output is 0
console.log(ArgCounter(10));     //  Output is 1
console.log(ArgCounter(31,2,33,4));     //  Output is 4



// 7. Function , as a function declaration, takes a string, 
//    reverses the characters, and returns it. 
//    For example, reverseString('rockstar');would return the string "ratskcor". 

function reverseString(userString){
    let reverseString = ""
    for( let i = userString.length -1; i >= 0; i--) {
        reverseString += userString[i]
    }

    return reverseString
}

console.log(reverseString("rockstar"))    // Outpoy is ratskcor



// 8. Function longestStringInArray, as a function expression, takes an array of strings 
//    as an argument and returns the length of the longest string.

const longestStringInArray = (strArray) => {
        let longestStringLength = 0;
        for (let i = 0; i < strArray.length; i++) {
            if(  strArray[i].length >= longestStringLength){
                longestStringLength = strArray[i].length
            }
        }
        return longestStringLength;
      }
      
console.log(longestStringInArray(["me", "they", "you", "Hello"]));   // Output is 5
console.log(longestStringInArray([]));   // Output is 0



// 9. Function stringsLongerThan, as a function declaration, takes an array of strings 
//    and a number as arguments, and returns an array of the strings that are longer 
//    than the number passed in. For example, 
//    stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3);
//    would return ["hello", "morning"].

function stringsLongerThan(strArray, num){
        const resultArray= [];
        for (let i = 0; i < strArray.length; i++) {
            if(strArray[i].length > num) {
                resultArray.push(strArray[i])
            }
        }
        return resultArray
}

console.log(stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3))   // output is [ 'hello', 'morning' ]
