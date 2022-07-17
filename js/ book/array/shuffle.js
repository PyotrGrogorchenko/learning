const arr = [1, 2, 3]

const shuffle = array => array.sort(() => Math.random() - .5)

console.log(shuffle(arr))
console.log(shuffle(arr))
console.log(shuffle(arr))

console.log('---------------')

const shuffleFisherYates = array => {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array
}

console.log(shuffleFisherYates(arr))
console.log(shuffleFisherYates(arr))
console.log(shuffleFisherYates(arr))
