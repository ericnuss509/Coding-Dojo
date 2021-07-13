// Rotate String
/* 
  String: Rotate String
  Create a standalone function that accepts a string and an integer,
  and rotates the characters in the string to the right by that given
  integer amount.
*/


// create a function 
// create a new string
//iterate through the string
//rotate
//push to new string
//return
const str = "Hello World";

const rotateAmnt1 = 0;
const expected1 = "Hello World";

const rotateAmnt2 = 1;
const expected2 = "dHello Worl";

const rotateAmnt3 = 2;
const expected3 = "ldHello Wor";

const rotateAmnt4 = 4;
const expected4 = "orldHello W";

const rotateAmnt5 = 13;
const expected5 = "ldHello Wor";

function reverse(str, amount){
//putting two substring back together
    if (amount > str.length){
        amount = amount % str.length
    }
    str.slice(str.length - rotateAmnt) + str.slice(0, str.length - rotateAmnt)
    // str = str.substring(str.length - amount, str.length) + str.substring(0, str.length - amount);
    return(str)
}


console.log(reverse("Hello World", 55))

/* 
Explanation: this is 2 more than the length so it ends up being the same
as rotating it 2 characters because after rotating every letter it gets back
to the original position.
*/

/**
 * Rotates a given string's characters to the right by the given amount,
 * wrapping characters to the beginning.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str
 * @param {number} amnt The amount of characters in the given str to rotate to the
 *    right.
 * @returns {string} The string rotated by the given amount.
 */
