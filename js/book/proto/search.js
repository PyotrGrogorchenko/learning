const head = {
  glasses: 1
}

const table = {
  pen: 3
  // __proto__: head
}

const bed = {
  sheet: 1,
  pillow: 2
  // __proto__: table
}

const pockets = {
  money: 2000
  // __proto__: bed
}

Object.setPrototypeOf(pockets, bed)
Object.setPrototypeOf(bed, table)
Object.setPrototypeOf(table, head)

console.log(pockets.money)
console.log(pockets.pen)
console.log(table.glasses)
console.log(table.money)

