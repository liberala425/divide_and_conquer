function findRotatedIndex(arr, num) {
    let maxPoint = turningPoint(arr)
    if (num < maxPoint){
        divideConquer(arr, num, 0, maxPoint)
    } else {
        divideConquer(arr, num, maxPoint, arr.length -1)
    }

}

function divideConquer(arr,num, left, right){

    while (left < right){
        midIdx = Math.floor((left + right)/2)
        midElement = arr[midIdx]
        if (midElement === num){
            return midIdx
        }else if (midElement > num){
            right = midIdx - 1
        } else {
            left = midIdx + 1
        }
    }
    return -1
}

function turningPoint(arr){
    let left = 0
    let right = arr.length - 1
    
    while (left < right){
        midIdx = Math.floor((left + right)/2)
        if (arr[midIdx-1] < midElement & arr[midIdx+1] < midElement){
            return midIdx
        } else if (arr[midIdx-1] < midElement & arr[midIdx+1] > midElement) {
            left = midIdx + 1
            
        } else{
            right = midIdx - 1
        }
    }
    
}

module.exports = findRotatedIndex