const styles = ['Jazz', 'Blues']
styles.push('Rock-n-roll')
styles[Math.floor((styles.length - 1)/2)] = 'Classic'
styles.shift()
styles.unshift('Rap', 'Reggae')

console.log(styles)

const arr = ['a', 'b']
arr.push(function() {
  console.log('context', this)
})
arr[2]()

const vasya = { name: "Вася", surname: "Пупкин", id: 1, age: 25 }
const petya = { name: "Петя", surname: "Иванов", id: 2, age: 32 }
const masha = { name: "Маша", surname: "Петрова", id: 3, age: 28 }

const users = [ vasya, petya, masha ]

const names = users.map(i => i.name)
console.log(names) // Вася, Петя, Маша

const usersMapped = users.map(i => ({ fullName: `${i.name} ${i.surname}`, id: i.id }))
console.log(usersMapped)

users.sort((a, b) => a.age - b.age)
console.log(users)

const averageAge = Math.floor(users.reduce((r, c) => r += c.age, 0)/ users.length)
console.log(averageAge)

const unique = (arr) => arr.reduce((r, c) => {
  r.includes(c) ? r : r.push(c)
  return r
}, [])
console.log(unique(['кришна', 'кришна', 'харе', 'харе', 'харе', 'харе', 'кришна', 'кришна', ':-O']))
