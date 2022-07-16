function Accumulator(init) {
  this.val = init
  this.accumulate = (val = 1) => {
    this.val += val
    return this.val
  }
} 


const acc = new Accumulator(1)

console.log(acc.accumulate())
console.log(acc.accumulate(2))
