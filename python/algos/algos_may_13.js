/* 
  Given a string,
  return a new string with the duplicates excluded
  Bonus: Keep only the last instance of each character.
*/

const str1 = "abcABC";
const expected1 = "abcABC";

const str2 = "helloo";
const expected2 = "helo";

/**
 * De-dupes the given string.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str A string that may contain duplicates.
 * @returns {string} The given string with any duplicate characters removed.
 */

//1. create a function.
//2. create a new string variable. 
//3. loop through the sting
//3.
//3.4 make a frequency table to check amount of times
//4. if there is a duplicate get rid of the extra or if there is more than one get rid of the extra.
//5.if there is not a duplicate move character to new string
//6.return string
//
function stringDedupe(str) {
    var newString = "";
    var frequencyTable = {};
    for(var i = 0; i < str.length; i++){
        let character = str[i];
            
            
        }
        
    }
    return newString
    
    

}

// module.exports = { stringDedupe };

