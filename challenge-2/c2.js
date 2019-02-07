class team {
  constructor (name, scores) {
    this.name = name
    this.scores = scores
    this.avg = this.scores.reduce((a, b) => a + b, 0) / this.scores.length
  }
}

const john = new team('john', [89, 120, 103])
const mike = new team('mike', [116, 94, 123])
const mary = new team('mary', [97, 134, 105])

const teams = [ john, mike, mary ]
// console.log(teams) // [mary, mike, john]

teams.sort((teamA, teamB) => {
  return teamB.avg - teamA.avg // descending
})

// since you've sorted, now check if there's any draws
const scores = teams.map(team => {
  return {
    name: team[name],
    avgScore: team[avg]
  }
})


console.log(scores)
