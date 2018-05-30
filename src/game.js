import { welcome, sayHi, congratulate } from '.';

function startGame(currentGame, roundsCount) {
  welcome();
  console.log(currentGame.description);
  console.log('\n');
  const username = sayHi();
  console.log('\n');
  let isWin = true;
  for (let i = 0; i < roundsCount; i += 1) {
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

export default startGame;
