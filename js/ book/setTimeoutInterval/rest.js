let i = 0

setTimeout(() => console.log(i), 0)

for(let j = 0; j < 100000000; j++) {
  i++
}
