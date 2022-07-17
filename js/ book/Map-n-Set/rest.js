const map = new Map()
map.set('name', 'John')
const keys = Array.from(map.keys())
keys.push('more')

//-------------------------

const messages = [
  {text: 'Hello', from: 'John'},
  {text: 'How goes?', from: 'John'},
  {text: 'See you soon', from: 'Alice'}
]

const readMessages = new WeakSet()

readMessages.add(messages[0])
readMessages.add(messages[1])

const readTime = new WeakMap()

readTime.set(messages[0], new Date())
