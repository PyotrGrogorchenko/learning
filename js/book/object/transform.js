const user = {
  name: 'John',
  money: 1000,
  // [Symbol.toPrimitive](hint) {
  //   console.log('hint', hint)
  //   return hint === 'string' ? `{name: ${this.name}}` : this.money
  // },
  // valueOf() {
  //   console.log('valueOf')
  //   return this.money
  // },
  toString(...args) {
    console.log('toString', args)
    return `{name: ${this.name}}`
  }
}

console.log(String(user))
console.log(+user)
console.log(user + 500)

const obj = {
  toString() {
    return '2'
  },
  // [Symbol.toPrimitive](hint) {
  //   console.log('hint', hint)
  //   return hint === 'string' ? `{name: ${this.name}}` : this.money
  // }
}

console.log('obj + 2', obj + 2)
console.log('obj * 2', obj * 2)
