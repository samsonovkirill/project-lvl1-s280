import startGame from '../game';

const ROUNDS = 3;
const isEven = num => num % 2 === 0;

const startEvenGame = () => {
  const createQuestion = () => {
    const question = Math.floor(Math.random() * 100);
    const correctAnswer = isEven(question) ? 'yes' : 'no';
    return { question, correctAnswer };
  };
  startGame({
    description: 'Answer "yes" if number even otherwise answer "no".',
    createQuestion,
  }, ROUNDS);
};

export default startEvenGame;
