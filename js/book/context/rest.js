{
  function askPassword(password, ok, fail) {
    if (password == 'rockstar') ok()
    else fail()
  }

  const user = {
    name: 'Вася',

    loginOk() {
      console.log(`${this.name} logged in`)
    },

    loginFail() {
      console.log(`${this.name} failed to log in`)
    },

  }

  askPassword('123', user.loginOk.bind(user), user.loginFail.bind(user))
  askPassword('rockstar', () => user.loginOk(), () => user.loginFail())
}

console.log('------------------------------')
{
  function askPassword(password, cb) {
    cb(password == 'rockstar')
  }

  const user = {
    name: 'John',

    login(result) {
      console.log(this.name + (result ? ' logged in' : ' failed to log in'))
    }
  }

  askPassword('123', user.login.bind(user))
  askPassword('rockstar', () => user.login())
}

{
  const user = {
    name: 'John'
  }

  function func() { 
    console.log(this) 
    console.log(this.name) 
  }

  const arrow = () => { 
    console.log(this) 
    console.log(this.name) 
  }

  const boundFunc = func.bind(user)
  boundFunc()
  
  const boundArrow = arrow.bind(user)
  boundArrow()
}

