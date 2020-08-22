// You are given an integer array nums and you have to return a new counts array. 
// The counts array has the property where counts[i] is the number of smaller elements 
// to the right of nums[i].

// Example 1:
// Input: nums = [5,2,6,1]
// Output: [2,1,1,0]
// Explanation:
// To the right of 5 there are 2 smaller elements (2 and 1).
// To the right of 2 there is only 1 smaller element (1).
// To the right of 6 there is 1 smaller element (1).
// To the right of 1 there is 0 smaller element.

var countSmaller = function(nums) {
    if(nums.length < 1) return [];
    var newArr = [];
    var count = 0;
    let j = nums.length-1;
    let k = 0;
        while(k < nums.length-1){
            if (nums[j] < nums[k]){
                count++;
                j--;
            }
            else j--;
           if (j === k){
                k++;
                j = nums.length-1;
                newArr.push(count);
                count = 0;
            }
        }
    
    newArr.push(0);
    return newArr;
};

var countSmaller = function(nums) {
    let sorted = [], result = [];
    for (let i=nums.length-1;i>=0;i--) {
        let left = 0, right = sorted.length;
        while(left < right) {
            let mid = left + Math.floor((right-left)/2);
            if (nums[i] > sorted[mid]) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }
        result.unshift(left);
        sorted.splice(left, 0, nums[i]);
    }
    return result;
};

console.log(countSmaller([5,2,6,1,5,7,4,1]))