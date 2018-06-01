import startGame from '../game';
import generateNum from '../utils';

const description = 'Balance the given number.';

const balanceNumber = (num) => {
  const numArr = num.toString().split('');
  const numArrSum = numArr.reduce((acc, item) => acc + +item, 0);
  const numArrAvg = Math.round(numArrSum / numArr.length);
  const avgArr = [];
  for (let i = 0; i < numArr.length; i += 1) {
    avgArr.push(numArrAvg);
  }
  const avgArrSum = numArrAvg * numArr.length;
  const arrsSumDiff = Math.abs(numArrSum - avgArrSum);
  const delta = avgArrSum < numArrSum ? 1 : -1;
  for (let i = 0; i < arrsSumDiff; i += 1) {
    avgArr[i] += delta;
  }
  return avgArr.sort((a, b) => a - b).join('');
};

const createQuestion = () => {
  const question = generateNum(9999, 100);
  const correctAnswer = balanceNumber(question);
  return { question: String(question), correctAnswer };
};

const startBalanceGame = () => {
  startGame({
    description,
    createQuestion,
  });
};

export default startBalanceGame;
