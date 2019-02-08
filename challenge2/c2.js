class Team {
  constructor (name, scores) {
    this.name = name
    this.scores = scores
    this.avg = this.scores.reduce((a, b) => a + b, 0) / this.scores.length
  }
}

const teams = [
  new Team('john', [89, 120, 103]),
  new Team('mike', [116, 94, 123]),
  // new Team('mary', [97, 134, 105]),
  new Team('lamb', [97, 134, 105])
]

teams.sort((teamA, teamB) => teamB.avg - teamA.avg )

const teamObj = {}

for (let i = 0; i < teams.length; i++) {
  const team = teams[i]

  if (teamObj[team.avg] === undefined) {
    teamObj[team.avg] = []
  }
  teamObj[team.avg].push(team.name)
}

const allScores = Object.keys(teamObj).sort((a, b) => b - a)

for (let i = 0; i < allScores.length; i++) {
  const score = allScores[i]

  if (teamObj[score].length > 1) {
    console.log(i + 1 + '. ' + score + ': (Draw between) ' + teamObj[score].toString())
  } else {
    console.log(i + 1 + '. ' + score + ': ' + teamObj[score].toString())
  }
}
