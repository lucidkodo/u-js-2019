class Family {
  constructor (name, bills) {
    this.name = name
    this.bills = bills
    this.tip = {}
  }

  avgTip () {
    return this.bills
  }
}

const john = new Family('john', [124, 48, 268, 180, 42])
john.tip = {
  '20': [],
  '15': [],
  '10': []
}

const mike = new Family('mike', [1, 2, 4])
mike.tip = {

}
