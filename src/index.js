import readlineSync from 'readline-sync';


const welcome = () => {
  console.log('Welcome to the Brain Games!');
};

const sayHi = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};

const congratulate = username => console.log(`Congratulations, ${username}!`);

export { welcome, sayHi, congratulate };
