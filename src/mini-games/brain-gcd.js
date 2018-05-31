import findGcd from '../find-gcd';
import startGame from '../game';

const ROUNDS = 3;

const startGcdGame = () => {
  const createQuestion = () => {
    const base = Math.floor((Math.random() * 10) + 2);
    const number1 = base * Math.floor((Math.random() * 10) + 1);
    const number2 = base * Math.floor((Math.random() * 10) + 1);
    const correctAnswer = findGcd(number1, number2);
    const question = `${number1} ${number2}`;
    return { question, correctAnswer: String(correctAnswer) };
  };
  startGame({
    description: 'Find the greatest common divisor of given numbers.',
    createQuestion,
  }, ROUNDS);
};

export default startGcdGame;
