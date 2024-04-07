function findFloor(arr, num) {
    left = 0;
    right = arr.length - 1;
    if (arr[left]> num | arr[right]< num){
        return -1
    }
    while (left < right){
        [midIdxd, midElement] = divideConquer(arr, left, right);
        if (midElement <= num & arr[midIdx + 1] > num){
            return midElement
        } else if (midElement < num & arr[midIdx + 1] < num){
            left = midIdx
        } else if (midElement > num){
            right = midIdx
        }
    }
}

function divideConquer(arr, left, right){

    midIdx = Math.floor((left + right)/2)
    return [midIdx, arr[midIdx]]
}

module.exports = findFloor