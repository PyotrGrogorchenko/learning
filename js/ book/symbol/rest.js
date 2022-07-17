{
  const id = Symbol('id')
  console.log(id.toString())
  console.log(id.description) // 'id'
  console.log(id.valueOf())
}

{
  const user = {
    name: 'John'
  }

  const id = Symbol('id')
  user[id] = 1

  console.log(user[id]) // 1
  console.log(user.id) // undefined
}

{
  const id = Symbol.for('id')
  const idAgain = Symbol.for('id')
  
  console.log(id === idAgain) // true
  console.log(Symbol.keyFor(id)) // 'id'
  
  console.log(Symbol)
}
