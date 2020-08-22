// how do we find the middle of an array without knowing the length?
// we need 2 pointers, one that moves one step at time and the other moves two steps at a time
// when the second pointer gets to the end, the 1st will be in the middle

function findMiddle(arr){
    let pt1 = 0, pt2 = 0;

    while(arr[pt2+2]){
        pt2 += 2;
        pt1++;
    }

    return arr[pt1];
}

console.log(findMiddle([1,2,3,4,5,6,7,8,9,10,11]));