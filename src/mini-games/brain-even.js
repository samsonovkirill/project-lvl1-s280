import readlineSync from 'readline-sync';
import startGame from '../game';

const isEven = num => num % 2 === 0;

const playRound = (username) => {
  const question = Math.floor(Math.random() * 100);
  console.log(`Question: ${question}`);
  const userAnswer = readlineSync.question('Your answer: ');
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  const isCorrect = userAnswer.toLowerCase() === correctAnswer;
  const userMessage = isCorrect ? 'Correct!' : `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\n Let's try again, ${username}!`;
  console.log(userMessage);
  return isCorrect;
};

const startEvenGame = () => {
  startGame({
    description: 'Answer "yes" if number even otherwise answer "no".',
    playRound,
  }, 3);
};

export default startEvenGame;
