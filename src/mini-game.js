export default class MiniGame {
  constructor(config) {
    this.name = config.name;
    this.description = config.description;
    this.playRound = config.playRound;
  }

  getName() {
    return this.name;
  }

  getDescription() {
    return this.description;
  }
}
