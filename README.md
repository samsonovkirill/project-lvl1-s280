# Brain games
<a href="https://codeclimate.com/github/samsonovkirill/project-lvl1-s280/maintainability">
  <img src="https://api.codeclimate.com/v1/badges/aa2dfee208745d974317/maintainability" />
</a>
<a href="https://travis-ci.org/samsonovkirill/project-lvl1-s280">
  <img src="https://travis-ci.org/travis-ci/travis-web.svg?branch=master" />
</a>

## About project
Brain games is a pack of console mini-games which were developed while passing hexlet.io project courses.
Each game is unique and started via game engine. Mini-games are modular so you can add your own mini-game.
## Installation
`npm i my-game-ks -g`

## Usage
To start the game type `brain-{gamename}` in the terminal.

There are 6  different games in v1.0.16:
* brain-even
* brain-calc
* brain-gcd
* brain-progression
* brain-prime

All the games have similar flow:
1. Welcome screen and name prompt
2. Question
3. Your Answer

Game continues up to 3 correct answers. If you give a wrong answer the game is finished.

#### Example
```
kirill$ brain-even
Welcome to the Brain Games!
Answer "yes" if number even otherwise answer "no".

May I have your name? Kirill
Hello, Kirill!

Question: 44
Your answer: yes
Correct!
Question: 76
Your answer: yes
Correct!
Question: 42
Your answer: yes
Correct!
Congratulations, Kirill!
```
## Games description
### brain-even
Answer 'yes' if number is even otherwise answer 'no'
### brain-calc
Find the result of the expression
### brain-gcd
Find the greatest common divisor
### brain-progression
Find a missing in given progression
### brain-prime
Answer 'yes' if number is prime otherwise answer 'no'
