const showBill = bills => {
  const tips = []
  const totals = []

  for (let i = 0; i < bills.length; i++) {
    const bill = bills[i]

    if (bill < 50) {
      tips.push(bill * 0.2)
      totals.push(bill * 1.2)
    } else if (50 < bill && bill < 200) {
      tips.push(bill * 0.15)
      totals.push(bill * 1.15)
    } else if (bill > 200) {
      tips.push(bill * 0.1)
      totals.push(bill * 1.1)
    }
  }

  return {
    tips,
    totals
  }
}

const price = showBill([49, 199, 201])
console.log(price)
