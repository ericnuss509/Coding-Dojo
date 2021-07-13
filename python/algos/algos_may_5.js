/* 
  Given in an alumni interview in 2021.
  String Encode
  You are given a string that may contain sequences of consecutive characters.
  Create a function to shorten a string by including the character,
  then the number of times it appears. 
  
  
  If final result is not shorter (such as "bb" => "b2" ),
  return the original string.
  */


// split each string into an arry
// get position 0 
// then post the arry length

const str1 = "aaaabbcddd"

function splitString(str){
    let arr = str.split("")
    var stringSearch = "a"
    var count = 0

    for(var i =0; i < arr.length; i++)
        if (charAt(arr[i]) === charAt(arr[i+1])){
        console.log(arr[i+1])
            count++
        }
        console.log(count)
        return count
    }
splitString(str1)

 // program to check the number of occurrence of a character


function countString(str, letter) {
    let count = 0;

    // looping through the items
    for (let i = 0; i < str.length; i++) {

        // check if the character is at that position
        if (str.charAt(i) == letter) {
            count += 1;
        }
    }
    console.log(count, letter)
    return count;
}
countString(str1, "a")

// take input from the user
const string = prompt('Enter a string: ');
const letterToCheck = prompt('Enter a letter to check: ');

//passing parameters and calling the function
const result = countString(string, letterToCheck);

// displaying the result
console.log(result);
 const expected1 = "a4b2c1d3";
 
 const str2 = "";
 const expected2 = "";
 
 const str3 = "a";
 const expected3 = "a";
 
 const str4 = "bbcc";
 const expected4 = "bbcc";

 const str5 = "aaaabbcdddaaa";
 const expected5 = "a4b2c1d3a3";
 
 /**
  * Encodes the given string such that duplicate characters appear once followed
  * by a number representing how many times the char occurs only if the
  * character occurs more than two time.
  * - Time: O(?).
  * - Space: O(?).
  * @param {string} str The string to encode.
  * @returns {string} The given string encoded.
  */
 function encodeStr(str) {}


//   ***************************************************************************************************************

 /* 
 String Decode  
*/

const str1 = "a3b2c1d3";
const expected1 = "aaabbcddd";

const str2 = "a3b2c12d10";
const expected2 = "aaabbccccccccccccdddddddddd";

/**
* Decodes the given string by duplicating each character by the following int
* amount if there is an int after the character.
* - Time: O(?).
* - Space: O(?).
* @param {string} str An encoded string with characters that may have an int
*    after indicating how many times the character occurs.
* @returns {string} The given str decoded / expanded.
*/
function decodeStr(str) {}