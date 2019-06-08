// executable JS goes here

nums = [-1, 0, 1, 2, -1, -4];
// nums = [0, 0, 0, 0];
// nums = [-2,0,0,2,2];

var threeSum = function(nums) {
    nums.sort();
    var result = [];
    for(var t = 0; t <= nums.length - 2; t++) {
        if (nums[t] > 0) {
            break;
        }
        if(nums[t] === nums[t - 1]) {
            continue;
        }
        var map = {};
        var used = {};
        for (var j = t + 1; j <= nums.length - 1; j++) {
            if(used[nums[j]] !== undefined) {
                continue;
            }
            if (map[ - nums[t] - nums[j]] !== undefined) {
                var triplet = [];
                triplet.push(nums[t]);
                triplet.push(nums[j]);
                triplet.push(map[-nums[t] -nums[j]]);
                result.push(triplet) ;
                used[nums[j]] = nums[j];
            } else {
                map[nums[j]] = nums[j];
            }
        }
    }
    // console.log(result);
    return result;
};


threeSum(nums);