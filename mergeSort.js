// const merge = (leftArr, rightArr) => {
//     let newArr = [];
//     let leftStart = 0, rightStart = 0;

//     while (leftStart < leftArr.length && rightStart < rightArr.length){
    
//        if (leftArr[leftStart] < rightArr[rightStart]){
//             newArr.push(leftArr[leftStart]);
//             leftStart++;
//         }
//        else {
//            newArr.push(rightArr[rightStart]);
//            rightStart++;
//        }
//     };
    
//     return [...newArr, ...leftArr.slice(leftStart), ...rightArr.slice(rightStart)];
// }

// const mergeSort = array => {
//     if (array.length <= 1){
//         return array;
//     }
//     let middle = Math.floor(array.length/2);
//     let leftArr = array.slice(0, middle);
//     let rightArr = array.slice(middle);
   
//     return merge(mergeSort(leftArr), mergeSort(rightArr));
// }

const mergeSort = arr => {
    if (arr.length > 1){
        let mid = Math.floor(arr.length/2);
        let rightArr = arr.slice(0,mid);
        let leftArr = arr.slice(mid);
        mergeSort(leftArr);
        mergeSort(rightArr);
    

        let i = 0;
        let j = 0;
        let k = 0;

        while (i < leftArr.length && j < rightArr.length){
            if (leftArr[i] < rightArr[j]){
            arr[k] = leftArr[i];
            i++;
            k++;
            } else if (rightArr[j] < leftArr[i]){
            arr[k] = rightArr[j];
            j++;
            k++;
            }
        }

        while (i < leftArr.length){
            arr[k] = leftArr[i];
            i++;
            k++;
        }

        while(j < rightArr.length){
            arr[k] = rightArr[j];
            j++;
            k++;
        }
    }
    return arr;
}

console.log(mergeSort([4,2,1,5,21,0,3,8,20,7]));