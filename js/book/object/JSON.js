const user = {
  name: 'Василий Иванович',
  age: 35
}

const copy = JSON.parse(JSON.stringify(user))
console.log(copy)
