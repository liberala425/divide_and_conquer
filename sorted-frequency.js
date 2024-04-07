function sortedFrequency(arr, num) {
    let first = findFirst(arr, num)
    let last = findLast(arr, num)
    if (first === -1 || last === -1){
        return -1
    }
    return last - first + 1
}


function findFirst(arr, num){
    left = 0
    right = arr.length - 1
    midIdx = Math.floor((left + right)/2)
    while(left <= right){
        if ((midIdx===0 || arr[midIdx-1] < num) && arr[midIdx]===num){
            return midIdx
        } else if (arr[midIdx] > num){
            right = midIdx - 1
        } else if (arr[midIdx] < num) {
            left = midIdx + 1
        }
    }
    return  -1
}

function findLast(arr, num){
    left = 0
    right = arr.length - 1
    midIdx = Math.floor((left + right)/2)
    while(left <= right){
        if ((midIdx === arr.length - 1 || arr[midIdx+1] > num) && arr[midIdx]===num){
            return midIdx
        } else if (arr[midIdx] > num){
            right = midIdx - 1
        } else if (arr[midIdx] < num) {
            left = midIdx + 1
        }
    }
    return  -1
}
module.exports = sortedFrequency