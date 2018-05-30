#!/usr/bin/env node
import Game from '../game';
import calcMiniGame from '../mini-games/brain-calc';

const ROUNDS = 3;
const game = new Game(ROUNDS);
game.addMiniGame(calcMiniGame);
game.start('brain-calc');
