import startGame from '../game';
import generateNum from '../utils';

const description = 'Answer "yes" if number is prime otherwise answer "no".';

const isPrime = (num) => {
  if (num === 1 || num % 2 === 0) {
    return false;
  }
  if (num === 2) {
    return true;
  }
  const max = Math.round(Math.sqrt(num));
  for (let i = 3; i <= max; i += 2) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const createQuestion = () => {
  const question = generateNum(10000);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  return { question, correctAnswer };
};

const startPrimeGame = () => {
  startGame({
    description,
    createQuestion,
  });
};

export default startPrimeGame;
