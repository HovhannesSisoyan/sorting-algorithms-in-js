const mergeSort = (array) => {
    const len = array.length;
    if (len == 1) {
        return array;
    }
    const midIndex = len/2;
    const leftArray = array.slice(0,midIndex);
    const rightArray = array.slice(midIndex, len);
    return mergeTwoSortedArrays(mergeSort(leftArray), mergeSort(rightArray));
};

const mergeTwoSortedArrays = (array1, array2) => {
    const res = [];
    let index1 = 0;
    let index2 = 0;
    const l1 = array1.length;
    const l2 = array2.length;    
    while ((index1 < (l1)) && (index2 < (l2))) {
        if (array1[index1] < array2[index2]) {
            res.push(array1[index1]);
            index1 ++;
        } else {
            res.push(array2[index2]);
            index2 ++;
        };
    };
    for (let i=index1; i<l1; i++) {
        res.push(array1[i]);
    };
    for (let i=index2; i<l2; i++) {
        res.push(array2[i]);
    };
    return res;
};

const c = mergeSort([5,1,2,8,7,4,9,3,6,0, -10000, 0,0,0, 5404]);
console.log(c);
