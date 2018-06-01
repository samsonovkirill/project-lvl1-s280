import startGame from '../game';
import generateNum from '../utils';

const description = 'What number is missing in this progression?';

const generateProgression = (start, length = 10) => {
  const progression = [start];
  const randomDelta = generateNum(20, 2);
  for (let i = 1; i < length; i += 1) {
    progression[i] = progression[i - 1] + randomDelta;
  }
  return progression;
};

const createQuestion = () => {
  const progressionLength = 10;
  const startNum = generateNum(10);
  const progression = generateProgression(startNum, progressionLength);
  const skipIndex = generateNum(progressionLength);
  const correctAnswer = progression[skipIndex];
  progression[skipIndex] = '..';
  const question = progression.join(' ');
  return { question, correctAnswer: String(correctAnswer) };
};

const startProgressionGame = () => {
  startGame({
    description,
    createQuestion,
  });
};

export default startProgressionGame;
