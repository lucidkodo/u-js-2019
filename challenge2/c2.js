class Team {
  constructor (name, scores) {
    this.name = name
    this.scores = scores
    this.avg = this.scores.reduce((a, b) => a + b, 0) / this.scores.length
  }
}

const john = new Team('john', [89, 120, 103])
const mike = new Team('mike', [116, 94, 123])
const mary = new Team('mary', [97, 134, 105])
const lamb = new Team('lamb', [97, 134, 105])

const teams = [ mary, john, mike, lamb ]
teams.sort((teamA, teamB) => teamB.avg - teamA.avg ) // descending

// create a big object out of the whole array
const teamObj = {}

for (let i = 0; i < teams.length; i++) {
  const team = teams[i]

  if (teamObj['k' + team.avg] === undefined) { // if this score doesn't exist
    teamObj['k' + team.avg] = []
  }
  teamObj['k' + team.avg].push(team.name)
}

console.log(teams)
console.log(teamObj)
