
// Given an array of integers, return indices of the two numbers such that they add up to a specific target.
//
//     You may assume that each input would have exactly one solution, and you may not use the same element twice.
//
//     Example:
//
// Given nums = [2, 7, 11, 15], target = 9,
//
//     Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].


var target = 6;
var nums = [3,2,4];
var twoSum = function(nums, target) {
    map = {};
    for (i = 0; i < nums.length; i++) {
        if (map[target - nums[i]] != undefined) {
            return [map[target - nums[i]], i]
        }
        map[nums[i]] = i;
    }
};

twoSum(nums, target);

// One pass HashMap solution, linear time, linear space, trading time for space and using Hash for quick lookups