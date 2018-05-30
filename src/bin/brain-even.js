#!/usr/bin/env node
import Game from '../game';
import evenMiniGame from '../mini-games/brain-even';

const ROUNDS = 3;
const game = new Game(ROUNDS);
game.addMiniGame(evenMiniGame);
game.start('brain-even');
