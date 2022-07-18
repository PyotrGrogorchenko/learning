const camelize = (str) => 
  str
    .split('-')
    .map((w, i) => i === 0 ? w : w[0].toUpperCase() + w.slice(1))
    .join('')

console.log(camelize('background-color')) // 'backgroundColor'
console.log(camelize('list-style-image')) // 'listStyleImage'
console.log(camelize('-webkit-transition')) // 'WebkitTransition'