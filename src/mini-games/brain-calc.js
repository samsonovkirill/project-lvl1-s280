import startGame from '../game';

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
    return { question, correctAnswer };
  };
  const isCorrect = (num1, num2) => parseInt(num1, 10) === parseInt(num2, 10);
  startGame({
    description: 'What is the result of the expression?',
    createQuestion,
    isCorrect,
  }, 3);
};

export default startCalcGame;
