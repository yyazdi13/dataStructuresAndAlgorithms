// Given two arrays, write a function to compute their intersection.
// Ex: Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2,2]

var intersect = function(nums1, nums2) {
    if (nums1.length < nums2.length){
        return intersect(nums2, nums1);
    }
    
    let hash = {};
    for (let num of nums1) {
        hash[num] = hash[num]+1||1;

    }

    let result = [];
    for (let num of nums2) {
        if (Object.keys(hash).includes('' + num)) {
            hash[num] -= 1;
            result.push(num);
            if (hash[num] == 0) delete hash[num];
        }
    }
    
    return result;
};
 console.log(intersect([3,1,1],[1,2,1]));