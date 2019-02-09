const calc = bill => {
  let tip

  if (bill < 50) {
    tip = 20
  } else if (50 < bill && bill < 200) {
    tip = 15
  } else if (bill > 200) {
    tip = 10
  }

  console.log('Bill: €' + bill + '\t' + tip + '% tip: €' + bill * tip / 100)
}

calc(201)
calc(199)
calc(49)
