import _ from 'lodash';
import { MAXBALLS } from './config.js';

// DOM
const divBingo = document.querySelector('.bingo');

// Genera el bombo y lo desordena
const roller = _.shuffle(_.range(1, MAXBALLS));

// Sacamos una bola del bombo
export default () => {
  const ball = roller.pop();
  divBingo.textContent = ball;
  return ball;
}
