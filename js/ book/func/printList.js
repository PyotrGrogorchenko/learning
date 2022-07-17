const l = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
}

const printListCycle = list => {
  let tmp = list
  while (tmp) {
    console.log(tmp.value)
    tmp = tmp.next
  }  
}

printListCycle(l)

console.log('-----------------')

const printListRecursion = list => {
  console.log(list.value)
  if (list.next) {
    printListRecursion(list.next)
  }
}

printListRecursion(l)

console.log('-----------------')

const printReverseListCycle = list => {
  const vals = []
  let tmp = list
  while (tmp) {
    // console.log(tmp.value)
    vals.push(tmp.value)
    tmp = tmp.next
  } 

  for (let i = vals.length - 1; i >= 0; i--) {
    console.log(vals[i])
  }

}

printReverseListCycle(l)

console.log('-----------------')

const printReverseListRecursion = list => {
  if (list.next) {
    printReverseListRecursion(list.next)
  }  
  console.log(list.value)
}

printReverseListRecursion(l)
