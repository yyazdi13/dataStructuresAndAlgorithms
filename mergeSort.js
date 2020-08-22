const merge = (leftArr, rightArr) => {
    let newArr = [];
    let leftStart = 0, rightStart = 0;

    while (leftStart < leftArr.length && rightStart < rightArr.length){
    
       if (leftArr[leftStart] < rightArr[rightStart]){
            newArr.push(leftArr[leftStart]);
            leftStart++;
        }
       else {
           newArr.push(rightArr[rightStart]);
           rightStart++;
       }
    };
    
    return [...newArr, ...leftArr.slice(leftStart), ...rightArr.slice(rightStart)];
}

const mergeSort = array => {
    if (array.length <= 1){
        return array;
    }
    let middle = Math.floor(array.length/2);
    let leftArr = array.slice(0, middle);
    let rightArr = array.slice(middle);
   
    return merge(mergeSort(leftArr), mergeSort(rightArr));
}

console.log(mergeSort([4,2,1,5,21,0,3,8,20]));