/*Given an array of integers, return indices of the two numbers
such that they add up to a specific target.

You may assume that each input would have exactly one solution,
and you may not use the same element twice.

Example:

Given nums = [2, 7, 11, 15], target = 9,
return [0, 1].
Because nums[0] + nums[1] = 2 + 7 = 9,
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let indices = [];
    let leng = nums.length;

    for (let i=0; i<leng-1; i++){
        for (let j=i+1; j<leng; j++){
            if (nums[i]+nums[j] === target){
                indices = [i, j];
                break;
            }
        }
    }
    return indices;
};

console.log(twoSum([2, 7, 11, 15], 9));
