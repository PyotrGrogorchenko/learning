const worker = {
  getNum() {
    return 1
  },
  slow(x, y) {
    console.log(`Called with ${x},${y}`)
    for (let i = 0; i < 1000000000; i++) {}
    return (x + y) * this.getNum()
  }  
}

function cache(func, hashFn = null) {
  const cache = new Map()
  const hash = (props) => props.join(',')

  return function(...args) {
    const key = hashFn ? hashFn(args) : hash(args)
    if (cache.has(key)) {
      console.log(`From cache ${key}`)
      return cache.get(key)
    }

    const result = func.call(this, ...args)

    cache.set(key, result)
    return result
  }
}

// worker.slow(1, 1)
// worker.slow = cache(worker.slow)
// worker.slow(2, 3)
// worker.slow(2, 3)

const hash = (props) => props.join(':')
worker.slow = cache(worker.slow, hash)
worker.slow(2, 3)
worker.slow(2, 3)

