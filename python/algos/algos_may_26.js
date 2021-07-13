/*
  Recursive Binary Search
  Input: SORTED array of ints, int value
  Output: bool representing if value is found
  Recursively search to find if the value exists, do not loop over every element.
  Approach:
  Take the middle item and compare it to the given value.
  Based on that comparison, narrow your search to a particular section of the array
*/


//1 get the length of the arry
//2 find mid point
//3 compare the seachNum at the mid point if higher or lower than it. 
//4 slice off the side you don't need to get a new array.
//5

const nums1 = [1, 3, 5, 6];
const searchNum1 = 4;
const expected1 = false;

const nums2 = [4, 5, 6, 8, 12];
const searchNum2 = 5;
const expected2 = true;

const nums3 = [3, 4, 6, 8, 12];
const searchNum3 = 3;
const expected3 = true;

/**
 * Add params if needed for recursion
 * Recursively performs a binary search (divide and conquer) to determine if
 * the given sorted nums array contains the given number to search for.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} sortedNums
 * @param {number} searchNum
 * @returns {boolean} Whether the searchNum was found in the sortedNums array.
 */
function binarySearch(sortedNums, searchNum) {
    var length = sortedNums.length;
    var midpoint = Math.floor(length / 2);
    var newArray = sortedNums;

    if (newArray.includes(searchNum)){

        if(sortedNums[midpoint] == searchNum){
            return true
        }
        if(sortedNums[midpoint] > searchNum){
            var array = newArray.slice(0, midpoint);
            return binarySearch(array, searchNum);
        }
        else if(sortedNums[midpoint] < searchNum){
            var array = newArray.slice(midpoint, newArray.length);
            return binarySearch(array, searchNum);
        }
    
    }else{
        return false
    }
    }

    
console.log(binarySearch(nums2, searchNum2))
// *************************************************************
// *************************************************************
// *************************************************************

  
/* 
  Recursively reverse a string
  helpful methods:
  str.slice(beginIndex[, endIndex])
  returns a new string from beginIndex to endIndex exclusive
*/
//1 spit the string into an array
//2 same as above 
//3 reverse the array. 
//4 then we join the array back to a string.

const str1 = "abc";
const expected1 = "cba";

const str2 = "";
const expected2 = "";

/*
 * Recursively reverses a string.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str
 * @returns {string} The given str reversed.
 */
function reverseStr(str) {
    var newString = str.split('');
    console.log(newString)
    
    
}
    
    
console.log(reverseStr(str1))