const salaries = {
  'John': 100,
  'Pete': 300,
  'Mary': 250
}

const sumSalaries = (obj) =>
  Object
    .values(obj)
    .reduce((r, c) => r + c, 0)
console.log(sumSalaries(salaries))    

const countKeys = (obj) => Object.keys(obj).length
console.log(countKeys(salaries))    

const topValue = (obj) => 
  Object
    .values(obj)
    .reduce((r, c) => Math.max(r, c), 0)
console.log(topValue(salaries))    

