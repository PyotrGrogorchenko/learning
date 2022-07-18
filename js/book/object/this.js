'use strict'

const user = {
  name: 'John',
  hi() {console.log(this.name)},
  bye() {console.log('Bye')}
}

user.hi()

// (user.name === 'John' ? user.hi : user.bye)()
user.name === 'John' ? user.hi() : user.bye()

console.log('-----------')

let obj, method;

obj = {
  go: function() {
    console.log(this)
  }
};

obj.go(); 
(obj.go)();
(method = obj.go)(); // undrfined
(obj.go || obj.stop)(); // undefined

console.log('-----------')

{ 
  function makeUser() {
    console.log(this)
    return {
      name: 'John',
      // ref: this
      ref() {
        return this
      }
    } 
  }

  const user = makeUser()

  console.log(user.ref().name)
}

