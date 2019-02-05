function User () {
  this.name = ''
  this.weight = 0
  this.height = 0
  this.bmi = () => {
    return this.weight / (Math.pow(this.height / 100, 2))
  }
}

const user1 = new User()
const user2 = new User()

const init = () => {
  // use long div display status
  // document.getElementById('content')
  const statusDiv = document.createElement('div')
  const contentH3 = document.createElement('h3')
  contentH3.textContent = 'Waiting for data...'
  contentH3.className = 'result'
  statusDiv.appendChild(contentH3)

  // get first user
  user1.name = window.prompt('Name for User 1:')
  if (user1.name) {
    user1.weight = parseFloat(window.prompt('Weight (kg) for ' + user1.name + '?'))
    if (user1.weight) {
      user1.height = parseFloat(window.prompt('Height (cm) for ' + user1.name + '?'))
    }
  }

  // proceed if user1 data complete
  if (user1.name && user1.weight && user1.height) {
    user2.name = window.prompt('Name for User 2:')
    if (user2.name) {
      user2.weight = parseFloat(window.prompt('Weight (kg) for ' + user2.name + '?'))
      if (user2.weight) {
        user2.height = parseFloat(window.prompt('Height (cm) for ' + user2.name + '?'))
      }
    }
  } else if (!user2.name || !user2.weight || !user2.height) {
    refresh()
  } else if (!user1.name || !user1.weight || !user1.height) {
    refresh()
  }

  // create and insert user2 here

  if (user1.bmi() > user2.bmi()) {
    window.alert(`${user1.name} has higher BMI! \n ${user1.bmi().toFixed(3)} vs ${user2.bmi().toFixed(3)}`)
  } else if (user1.bmi() < user2.bmi()) {
    window.alert(`${user2.name} has higher BMI! \n ${user2.bmi().toFixed(3)} vs ${user1.bmi().toFixed(3)}`)
  } else if (user1.bmi() === user2.bmi()) {
    window.alert(`What are the odds!! SAME BMI!`)
  }
}

const refresh = () => {
  const bool = window.confirm('Insufficient data. Refresh?')
  if (bool) {
    location.reload()
  }
  return
}

const appendUser = user => {
  const userDiv = document.createElement('div')
  userDiv.className = 'user-data'
}

init()

console.log(user1, user2)
