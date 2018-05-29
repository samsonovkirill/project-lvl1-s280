#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { welcome, sayHi, congratulate } from '..';


(function startGame() {
  const lineTranslation = () => {
    console.log('\n');
  };
  const playRound = () => {
    const testNumber = Math.floor(Math.random() * 100);
    console.log(`Question: ${testNumber}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const rightAnswer = (parseInt(testNumber, 10) % 2 === 0) ? 'yes' : 'no';
    return userAnswer === rightAnswer;
  };
  welcome();
  console.log('Answer "yes" if number even otherwise answer "no".');
  lineTranslation();
  const username = sayHi();
  lineTranslation();
  const result = playRound();
  if (result) {
    congratulate(username);
  }
}());
