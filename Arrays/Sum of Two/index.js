const getIndexes = (arr, sum) => {
    const hm = {}; // hash mapto store number and it's index

    if (arr.length < 2) return null;

    for (let i=0; i< arr.length; i++) {
        const n = arr[i]; // get current number
        const ntg = sum  - n; // Number To Get so as to make the total

        if (hm[n] >= 0) {
            // if we have the NTG in hashmap
            // return value of that NTG and current index (i)
            return [hm[n], i];
        }
        hm[ntg] = i;
    }
    return null;
}

const arr = [8, 1, 4, 6, 9, 2]; // given array
const sum = 1; // sum to search
const val = getIndexes(arr, sum);
console.log(val);