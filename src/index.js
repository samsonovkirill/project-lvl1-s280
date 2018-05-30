import readlineSync from 'readline-sync';
import startGame from './game';
import evenMiniGame from './mini-games/brain-even';
import calcMiniGame from './mini-games/brain-calc';
import gcdMiniGame from './mini-games/brain-gcd';

const ROUNDS = 3;

const welcome = () => {
  console.log('Welcome to the Brain Games!');
};

const sayHi = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};

const congratulate = username => console.log(`Congratulations, ${username}!`);

const brainEven = () => {
  startGame(evenMiniGame, ROUNDS);
};

const brainCalc = () => {
  startGame(calcMiniGame, ROUNDS);
};

const brainGcd = () => {
  startGame(gcdMiniGame, ROUNDS);
};

export { welcome, sayHi, congratulate, brainEven, brainCalc, brainGcd };
