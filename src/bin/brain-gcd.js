#!/usr/bin/env node
import Game from '../game';
import gcdMiniGame from '../mini-games/brain-gcd';

const ROUNDS = 3;
const game = new Game(ROUNDS);
game.addMiniGame(gcdMiniGame);
game.start('brain-gcd');
