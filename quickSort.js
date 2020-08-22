function quickSort (arr){
    if (arr.length <= 1){
        return arr;
    }
    let leftArr = [];
    let rightArr = [];
    let pivot = arr[arr.length-1];

    for (let i = 0; i < arr.length-1; i++){
        if (arr[i] < pivot){
            leftArr.push(arr[i]);
        }
        else rightArr.push(arr[i]);
    }

    return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
    
}

console.log(quickSort([4,6,9,1,1,44,7,0,33]));