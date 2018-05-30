import readlineSync from 'readline-sync';
import findGcd from '../find-gcd';

const playRound = (username) => {
  const base = Math.floor((Math.random() * 10) + 2);
  const number1 = base * Math.floor((Math.random() * 10) + 1);
  const number2 = base * Math.floor((Math.random() * 10) + 1);
  const correctAnswer = findGcd(number1, number2);
  console.log(`Question: ${number1} ${number2}`);
  const userAnswer = readlineSync.question('Your answer: ');
  const isCorrect = parseInt(userAnswer, 10) === correctAnswer;
  const userMessage = isCorrect ? 'Correct!' : `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\n Let's try again, ${username}!`;
  console.log(userMessage);
  return isCorrect;
};

const brainCalc = {
  description: 'Find the greatest common divisor of given numbers.',
  playRound,
};

export default brainCalc;
