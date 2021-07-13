/*
  Sum To One Digit
  Implement a function sumToOne(num)​ that,
  given a number, sums that number’s digits
  repeatedly until the sum is only one digit. Return
  that final one digit result.
  Tips:
    to access digits from a number, need to convert it .toString() to access each digit via index
    parseInt(arg) returns arg parsed as an integer, or NaN if it couldn't be converted to an int
    isNaN(arg) used to check if something is NaN
*/
//If there are more than one digit split the digits and add them.
//Cast the number that we take in 
//Split the string.
//recast as intigers and add them. 
//then do math stuff.
//return the math. 



const num1 = 5;
const expected1 = 5;

const num2 = 10;
const expected2 = 1;

const num3 = 25;
const expected3 = 7;

const num4 = 48;
const expected4 = 7;

/**
 * Sums the given number's digits until the number becomes one digit.
 * @param {number} num The number to sum to one digit.
 * @returns {number} One digit.
 */
function sumToOneDigit(num) {
    var str = num.toString();
    var split = str.split("");
    var newNumber = 0;

    for(var i = 0; i < split.length; i ++){
        let splitNum = parseInt(split[i])
        console.log(split[i])
        newNumber = newNumber + splitNum
        console.log(newNumber)
    }

}
console.log(sumToOneDigit(num4))
// *****************************************************************************
// *****************************************************************************
// *****************************************************************************

// http://algorithms.dojo.news/static/Algorithms/index.html#LinkTarget_2129
/* 
  String Anagrams
  Given a string,
  return array where each element is a string representing a different anagram (a different sequence of the letters in that string).
  Ok to use built in methods
*/

const str1 = "lim";
const expected1 = ["ilm", "iml", "lim", "lmi", "mil", "mli"];
// Order of the output array does not matter
//1. base case is when we reach what it started at. 
//2. We need an empty array.
//3. iterate through the string

/**
 * Add params if needed for recursion.
 * Generates all anagrams of the given str.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str
 * @returns {Array<string>} All anagrams of the given str.
 */
function generateAnagrams(str) {}
