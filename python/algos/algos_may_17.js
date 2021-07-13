/* 
  Balance Index
  Here, a balance point is ON an index, not between indices.
  Return the balance index where sums are equal on either side
  (exclude its own value).
  
  Return -1 if none exist.
  
*/

const nums1 = [-2, 5, 7, 0, 3];
const expected1 = 2;

const nums2 = [9, 9];
const expected2 = -1;
//1. Create a function that loops checks the balance index.
//2. Make a check to see if the array is even. If so return -1.
//3. create 2 varable sum of the end and 
//3. loop through the array agian, compair the start with the end. 
//4. if they don't equal return true o
//5. Returns the index of the balance point. 

/**
 * Finds the balance index in the given array where the sum to the left of the
 *    index is equal to the sum to the right of the index.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums
 * @returns {number} The balance index or -1 if there is none.
 */
function balanceIndex(nums) {
    for (i=1;i<nums.length;i++){
        var left = 0;
        var right = 0;
        for(j=0;j<i;j++){
            left+=nums[j];
        }
        for(a=i+1;a<nums.length;a++){
            right += nums[a];
        }
        if(left == right){
            return i;
        }
    }
    return -1
}
console.log(balanceIndex(nums1))
console.log(balanceIndex(nums2))


// **********************************************************************
// **********************************************************************
// **********************************************************************


/* 
  Balance Point
  Write a function that returns whether the given
  array has a balance point BETWEEN indices, 
  where one side’s sum is equal to the other’s. 
*/

const nums3 = [1, 2, 3, 4, 10];
const expected1 = true;
// Explanation: between indices 3 & 4

const nums4 = [1, 2, 4, 2, 1];
const expected2 = false;

/**
 * Determines if there is a balance point BETWEEN indexes where the sum of the
 *    left side is equal to the sum of the right side of the given array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums
 * @returns {boolean} Indicates if a balance point exists.
 */
function balancePoint(nums) {
    for(i=0;i<nums.length;i++){
        var left = 0
        var right = 0
        for(j=0;j<i;j++){
            left += nums[j];
        }
        for(a=i;a<nums.length;a++){
            right += nums[a];
        }
        if(left == right){
            return true;
        }
    }
    return false
}
console.log(balancePoint(nums3))
console.log(balancePoint(nums4))
