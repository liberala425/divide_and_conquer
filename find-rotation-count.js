function findRotationCount(arr) {
    left = 0;
    right = arr.length - 1;
    while (left < right){
        [midIdxd, midElement] = divideConquer(arr, left, right);
        if (midElement > arr[midIdx - 1] & midElement > arr[midIdx + 1]){
            return midIdx - left + 1
        }
        if (midElement > arr[left]) {
            left = midIdx + 1
        } else if (midElement < arr[left])
            right = midIdx - 1
    }

}

function divideConquer(arr, left, right){

    midIdx = Math.floor((left + right)/2)
    return [midIdx, arr[midIdx]]
}


module.exports = findRotationCount