import startGame from '../game';

const ROUNDS = 3;
const operatorAction = {
  '-': (a, b) => a - b,
  '+': (a, b) => a + b,
  '*': (a, b) => a * b,
};

const startCalcGame = () => {
  const createQuestion = () => {
    const operand1 = Math.floor(Math.random() * 20);
    const operand2 = Math.floor(Math.random() * 20);
    const operatorsList = Object.keys(operatorAction);
    const operator = operatorsList[Math.floor(Math.random() * operatorsList.length)];
    const question = `${operand1} ${operator} ${operand2}`;
    const correctAnswer = operatorAction[operator](operand1, operand2);
    return { question, correctAnswer: String(correctAnswer) };
  };
  startGame({
    description: 'What is the result of the expression?',
    createQuestion,
  }, ROUNDS);
};

export default startCalcGame;
