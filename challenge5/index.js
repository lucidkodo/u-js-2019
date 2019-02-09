class Bill {
  constructor (name, bills) {
    this.name = name
    this.bills = bills
    this.tips = []
    this.total = []
  }

  calcTips () {
    for (let i = 0; i < this.bills.length; i++) {
      const bill = this.bills[i]
      let tip

      if (bill < 50) {
        tip = 0.2
      } else if (bill > 50 && bill < 200 ) {
        tip = 0.15
      } else if (bill > 200) {
        tip = 0.1
      }

      this.tips.push(bill * tip)
      this.total.push(bill * (tip + 1))
    }

    console.log(this.tips, this.total)
  }
}

const john = new Bill('john', [124, 48, 268, 180, 42])
const mike = new Bill('mike', [77, 375, 110, 45])

john.calcTips()
mike.calcTips()
