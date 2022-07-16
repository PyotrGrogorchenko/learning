const ladder = {
  step: 0,
  route: [],
  up() {
    this.step++
    this.pushRoute()
    return this
  },
  down() {
    this.step--
    this.pushRoute()
    return this
  },
  pushRoute() {
    this.route.push(this.step)
  },
  show() {
    console.log(this.route.join('->'))
    return this
  }
}

ladder.up().down().up().up().down().show()
