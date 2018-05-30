import readlineSync from 'readline-sync';

const operatorAction = {
  '-': (a, b) => a - b,
  '+': (a, b) => a + b,
  '*': (a, b) => a * b,
};

const playRound = (username) => {
  const operand1 = Math.floor(Math.random() * 20);
  const operand2 = Math.floor(Math.random() * 20);
  const operator = Object.keys(operatorAction)[Math.floor(Math.random() * 3)];
  console.log(`Question: ${operand1} ${operator} ${operand2}`);
  const userAnswer = readlineSync.question('Your answer: ');
  const correctAnswer = operatorAction[operator](operand1, operand2);
  const isCorrect = parseInt(userAnswer, 10) === correctAnswer;
  const userMessage = isCorrect ? 'Correct!' : `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\n Let's try again, ${username}!`;
  console.log(userMessage);
  return isCorrect;
};

const brainCalc = {
  description: 'What is the result of the expression?',
  playRound,
};

export default brainCalc;
