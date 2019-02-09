class Person {
  constructor (name, mass, height) {
    this.name = name
    this.mass = mass
    this.height = height
  }

  getBMI () {
    return this.mass / (this.height * this.height)
  }
}


const myfn = () => {
  const tom = new Person('tom', 55, 1.55)
  const joe = new Person('joe', 45, 1.65)

  if (tom.getBMI() > joe.getBMI()) {
    console.log('Tom has higher BMI: ' + tom.getBMI())
  } else if (tom.getBMI() < joe.getBMI()) {
    console.log('Joe has higher BMI: ' + joe.getBMI())
  } else {
    console.log('They have the same BMI.')
  }
}

myfn()
