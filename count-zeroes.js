function countZeroes(arr) {
  left = 0
  right = arr.length - 1
  while(left <= right){
    midIdx = Math.floor((left + right)/2)
    if (arr[midIdx] == 0 && (arr[midIdx - 1] == 1 || midIdx == 0)){
        return midIdx
    } else if (arr[midIdx]==1){
        left = midIdx + 1
    } else if (arr[midIdx] == 0 && arr[midIdx - 1] == 0 ){
        right = midIdx - 1
    }
  }
  return arr.length - left
}

module.exports = countZeroes