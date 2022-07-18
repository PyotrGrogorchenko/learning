function partial(func, ...argsBound) {
  return function(...args) {
    console.log(this)
    return func.call(this, ...argsBound, ...args)
  }
}

const user = {
  firstName: 'John',
  say(time, phrase) {
    console.log(`[${time}] ${this.firstName}: ${phrase}!`)
  }
}

user.sayNow = partial(user.say, new Date().getHours() + ':' + new Date().getMinutes())

user.sayNow('Hello')
