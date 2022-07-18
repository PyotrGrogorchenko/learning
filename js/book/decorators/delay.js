function f(message, delay) {
  console.log(message, delay)
}

function delay(fn, ms) {
  return (...args) => {
    setTimeout(() => fn.apply(this, args), ms)  
  }
}

const f1000 = delay(f, 1000)
const f1500 = delay(f, 1500)

f1000('delay', 1000)
f1500('delay', 1500)