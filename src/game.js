import readlineSync from 'readline-sync';
import { welcome, sayHi, congratulate } from '.';

function startGame(currentGame, roundsCount) {
  welcome();
  console.log(currentGame.description);
  console.log('\n');
  const username = sayHi();
  console.log('\n');
  let isWin = true;
  for (let i = 0; i < roundsCount; i += 1) {
    const { question, correctAnswer } = currentGame.createQuestion();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const answerIsCorrect = currentGame.isCorrect(userAnswer, correctAnswer);
    if (answerIsCorrect) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\n Let's try again, ${username}!`);
      isWin = false;
      break;
    }
  }
  if (isWin) {
    congratulate(username);
  }
}

export default startGame;
