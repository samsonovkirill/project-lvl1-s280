import startGame from '../game';
import generateNum from '../utils';

const description = 'Find the greatest common divisor of given numbers.';
const findGcd = (num1, num2) => (num2 ? findGcd(num2, num1 % num2) : num1);

const createQuestion = () => {
  const base = generateNum(10, 2);
  const number1 = base * generateNum(10, 1);
  const number2 = base * generateNum(10, 1);
  const correctAnswer = String(findGcd(number1, number2));
  const question = `${number1} ${number2}`;
  return { question, correctAnswer };
};

const startGcdGame = () => {
  startGame({
    description,
    createQuestion,
  });
};

export default startGcdGame;
