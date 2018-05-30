#!/usr/bin/env node
import Game from '../game';
import evenMiniGame from '../mini-games/brain-even';

const game = new Game(3);
game.addMiniGame(evenMiniGame);
game.start('brain-even');
