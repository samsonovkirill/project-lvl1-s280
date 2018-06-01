import startGame from '../game';
import generateNum from '../utils';

const description = 'Answer "yes" if number even otherwise answer "no".';

const isEven = num => num % 2 === 0;
const createQuestion = () => {
  const question = generateNum(100);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return { question, correctAnswer };
};

const startEvenGame = () => {
  startGame({
    description,
    createQuestion,
  });
};

export default startEvenGame;
