'use strict'
const user = {
  get fullName() {
    return this.name + ' ' + this.surname
  },
  set fullName(val) {
    const vals = val.split('_')
    this.name = vals[0] ?? ''
    this.surname = vals[1] ?? ''
  }
}

Object.defineProperty(user, 'name', {
  value: 'John',
  enumerable: true,
  configurable: true,
  writable: true
})

Object.defineProperty(user, 'surname', {
  value: 'Johnson',
  enumerable: true,
  configurable: true,
  writable: true
})

Object.defineProperties(user, {
  'birthday': { value: new Date('1999-01-26'), writable: false, enumerable: true },
  'country': { value: 'Narnia' }
})

Object.defineProperty(user, 'age', {
  get() {
    return new Date().getFullYear() - this.birthday.getFullYear()
  }
})

// Object.entries(user).forEach(([key, value]) => console.log(key, value) )

// console.log(Object.isFrozen(user))

// const descriptor = Object.getOwnPropertyDescriptor(Math, 'PI');
// console.log(JSON.stringify(descriptor, null, 2))

console.log(user.fullName)
user.fullName = 'Vasya_Pupkin'
console.log(user.fullName)

console.log(user.birthday)
console.log(user.age)
