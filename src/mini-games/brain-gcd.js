import findGcd from '../find-gcd';
import startGame from '../game';

const startGcdGame = () => {
  const createQuestion = () => {
    const base = Math.floor((Math.random() * 10) + 2);
    const number1 = base * Math.floor((Math.random() * 10) + 1);
    const number2 = base * Math.floor((Math.random() * 10) + 1);
    const correctAnswer = findGcd(number1, number2);
    const question = `${number1} ${number2}`;
    return { question, correctAnswer };
  };
  const isCorrect = (num1, num2) => parseInt(num1, 10) === parseInt(num2, 10);
  startGame({
    description: 'Find the greatest common divisor of given numbers.',
    createQuestion,
    isCorrect,
  }, 3);
};

export default startGcdGame;
