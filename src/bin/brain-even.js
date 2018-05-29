#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { welcome, sayHi, congratulate } from '..';

const ROUNDS = 3;

(function Game(rounds) {
  const lineTranslation = () => {
    console.log('\n');
  };
  const playRound = (username) => {
    const testNumber = Math.floor(Math.random() * 100);
    console.log(`Question: ${testNumber}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const correctAnswer = (testNumber % 2 === 0) ? 'yes' : 'no';
    const isCorrect = userAnswer.toLowerCase() === correctAnswer;
    const userMessage = isCorrect ? 'Correct!' : `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\n Let's try again, ${username}!`;
    console.log(userMessage);
    return isCorrect;
  };
  welcome();
  console.log('Answer "yes" if number even otherwise answer "no".');
  lineTranslation();
  const username = sayHi();
  lineTranslation();
  let roundsCount = rounds;
  while (roundsCount !== 0) {
    const isCorrect = playRound(username);
    if (isCorrect) {
      roundsCount -= 1;
    } else {
      break;
    }
  }
  if (roundsCount === 0) {
    congratulate(username);
  }
}(ROUNDS));
