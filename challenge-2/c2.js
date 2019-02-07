class team {
  constructor (name, scores) {
    this.name = name
    this.scores = scores
    this.avg = this.scores.reduce((a, b) => a + b, 0) / this.scores.length
  }

  // avgScore () {
  //   return this.score.reduce((a, b) => a + b, 0) / this.score.length
  // }
}

const john = new team('john', [89, 120, 103])
const mike = new team('mike', [116, 94, 123])
const mary = new team('mary', [97, 134, 105])

