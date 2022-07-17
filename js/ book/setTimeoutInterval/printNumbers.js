const printNumbersInterval = (from, to) => {
  let i = from
  const id = setInterval(() => {
    console.log(i)
    i++
    if (i > to) clearInterval(id)
  }, 500)
}

// printNumbersInterval(1, 10)

const printNumbersTimeout = (from, to) => {
  let i = from
  
  const cb = 
  
  setTimeout(function go() {
    console.log(i)
    i++
    if (i > to) return
    setTimeout(go, 500)
  }, 500)
}

printNumbersTimeout(1, 10)
