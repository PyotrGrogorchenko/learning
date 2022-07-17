function spy(fn) {

  function wrapper(...args) {
    wrapper.calls.push(args)
    console.log(args, arguments)
    return fn.apply(this, arguments)
  }

  wrapper.calls = []
  return wrapper
}

function work(a, b) {
  console.log(a + b)
}

work = spy(work)

work(1, 2)
work(4, 5)

for (let args of work.calls) {
  console.log('call:' + args.join())
}
