import startGame from '../game';
import generateNum from '../utils';

const description = 'What is the result of the expression?';

const operatorAction = {
  '-': (a, b) => a - b,
  '+': (a, b) => a + b,
  '*': (a, b) => a * b,
};

const createQuestion = () => {
  const operand1 = generateNum(20);
  const operand2 = generateNum(20);
  const operatorsList = Object.keys(operatorAction);
  const operator = operatorsList[generateNum(operatorsList.length)];
  const question = `${operand1} ${operator} ${operand2}`;
  const correctAnswer = operatorAction[operator](operand1, operand2);
  return { question, correctAnswer: String(correctAnswer) };
};

const startCalcGame = () => {
  startGame({
    description,
    createQuestion,
  });
};

export default startCalcGame;
