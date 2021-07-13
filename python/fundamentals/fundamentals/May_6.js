
/*
  String: Is Palindrome
  Create a function that returns a boolean whether the string is a strict palindrome.
    - palindrome = string that is same forwards and backwards

  Do not ignore spaces, punctuation and capitalization
 */
const str1 = "a x a";
const expected1 = true;

const str2 = "racecar";
const expected2 = true;

const str3 = "Dud";
const expected3 = false;

const str4 = "oho!";
const expected4 = false;

const str5 = "";
function palindrome(str){
    if(str == "") {return "This is not a palindrome."}
   
    var newString = ""

    for(var i = 0; i < str.length; i++){
        newString = str[i] + newString
        
    }
    if(str === newString){

        return true
    }

    return false
}

console.log(palindrome(str1))
console.log(palindrome(str2))
console.log(palindrome(str3))
console.log(palindrome(str4))
console.log(palindrome(str5))







/**
* Determines if the given str is a palindrome (same forwards and backwards).
* - Time: O(?).
* - Space: O(?).
* @param {string} str
* @returns {boolean} Whether the given str is a palindrome or not.
*/
function isPalindrome(str) {}

// ******************************************************************************
// ******************************************************************************
// ******************************************************************************

/* 
Longest Palindrome
For this challenge, we will look not only at the entire string provided, but also at the substrings within it. Return the longest palindromic substring. 
Strings longer or shorter than complete words are OK.
All the substrings of "abc" are:
a, ab, abc, b, bc, c
*/

const { isPalindrome } = require("./isPalindrome");

const str1 = "what up, daddy-o?";
const expected1 = "dad";

const str2 = "uh, not much";
const expected2 = "u";

const str3 = "Yikes! my favorite racecar erupted!";
const expected3 = "e racecar e";

/**
* Finds the longest palindromic substring in the given string.
* - Time: O(?).
* - Space: O(?).
* @param {string} str
* @returns {string} The longest palindromic substring from the given string.
*/
function longestPalindromicSubstring(str) {}
 
