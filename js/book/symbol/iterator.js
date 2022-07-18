const range = {
  from: 1,
  to: 5
}

range[Symbol.iterator] = function() {
  return {
    currnet: this.from,
    last: this.to,

    next() {
      if (this.currnet <= this.last) {
        return {done: false, value: this.currnet++}
      }
      return {done: true}
    }
    
  }
}

for (const val of range) {
  console.log(val)
}
