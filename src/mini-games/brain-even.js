import startGame from '../game';

const isEven = num => num % 2 === 0;

const startEvenGame = () => {
  const createQuestion = () => {
    const question = Math.floor(Math.random() * 100);
    const correctAnswer = isEven(question) ? 'yes' : 'no';
    return { question, correctAnswer };
  };
  const isCorrect = (str1, str2) => str1.toLowerCase() === str2.toLowerCase();
  startGame({
    description: 'Answer "yes" if number even otherwise answer "no".',
    createQuestion,
    isCorrect,
  }, 3);
};

export default startEvenGame;
