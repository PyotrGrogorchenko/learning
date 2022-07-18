// function Rabbit() {}
// Rabbit.prototype = {
//   eats: true
// }
// const rabbit = new Rabbit()
// delete Rabbit.prototype.eats
// // console.log(rabbit.eats)

// function Obj() {
//   this.name = 'obj'
// }

// const obj = new Obj()

// const obj2 = new obj.constructor()

// function Rabbit(name) {
//   this.name = name
// }
// Rabbit.prototype.sayHi = function() {
//   console.log(this.name)
// }

// let rabbit = new Rabbit('Rabbit')

// rabbit.sayHi()
// Rabbit.prototype.sayHi()
// Object.getPrototypeOf(rabbit).sayHi()
// rabbit.__proto__.sayHi()

let dictionary = Object.create(null, {
  toString: {
    value() {
      return Object.keys(this).join(',')
    }
  }
})

dictionary.apple = 'Apple'
dictionary.__proto__ = 'test'

for(let key in dictionary) {
  console.log(key)
}

console.log('' + dictionary) // "apple,__proto__"
