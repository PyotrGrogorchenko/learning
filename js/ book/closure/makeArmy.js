function makeArmy() {
  const shooters = []

  let i = 0
  while (i < 10) {
    const j = i
    const shooter = function() {
      console.log(j)
    }
    shooters.push(shooter)
    i++
  }

  return shooters
}

const army = makeArmy()

army[0]()
army[5]()
