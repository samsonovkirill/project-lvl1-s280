import { welcome, sayHi, congratulate } from '.';

export default class Game {
  constructor(rounds) {
    this.roundsCount = rounds;
    this.miniGames = {};
  }

  addMiniGame(miniGame) {
    if (!this.miniGames[miniGame.getName()]) {
      this.miniGames[miniGame.getName()] = miniGame;
    }
  }

  start(miniGameName) {
    const currentGame = this.miniGames[miniGameName];
    welcome();
    console.log(currentGame.getDescription());
    console.log('\n');
    const username = sayHi();
    console.log('\n');
    let isWin = true;
    for (let i = 0; i < this.roundsCount; i += 1) {
      const isCorrect = currentGame.playRound(username);
      if (!isCorrect) {
        isWin = false;
        break;
      }
    }
    if (isWin) {
      congratulate(username);
    }
  }
}
