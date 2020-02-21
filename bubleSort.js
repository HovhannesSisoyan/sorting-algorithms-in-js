import swap from './helpers.js'

const a = [5,1,2,8,7,4,9,3,6,0, -10000, 0,0,0, 5404];

const bubleSort = (array) => {
    let lastSortedIndex = array.length - 2;
    while (lastSortedIndex >= 0) {
        for (let i=0; i<=lastSortedIndex; i++){
            if (array[i] > array[i+1]) {
                swap(array, i, i+1);
            };
        };
        lastSortedIndex --;
    };
    return array;
};

console.log(bubleSort(a));

