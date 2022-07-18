const filterRange = (arr, a, b) => arr.filter(i => i >= a && i <= b )

const arr = [5, 3, 8, 1]
console.log(filterRange(arr, 1, 4))

const filterRangeInPlace = (arr, a, b) => {
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] < a || arr[i] > b) {
      arr.splice(i, 1)
    }
  }
}

filterRangeInPlace(arr, 1, 4)
console.log(arr)
