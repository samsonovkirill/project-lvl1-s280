import readlineSync from 'readline-sync';

const welcome = () => {
  console.log('Welcome to the Brain Games!');
};

const sayHi = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};

const congratulate = username => console.log(`Congratulations, ${username}!`);

const startGame = (currentGame, roundsCount = 3) => {
  welcome();
  console.log(currentGame.description);
  console.log('\n');
  const username = sayHi();
  console.log('\n');
  for (let i = 0; i < roundsCount; i += 1) {
    const { question, correctAnswer } = currentGame.createQuestion();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const isCorrect = userAnswer === correctAnswer;
    if (isCorrect) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\n Let's try again, ${username}!`);
      return;
    }
  }
  congratulate(username);
};

export { welcome };
export default startGame;
