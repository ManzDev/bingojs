import _ from 'lodash';
import { MAXBOLAS } from './config.js';

// DOM
const divBingo = document.querySelector('.bingo');

// Genera el bombo y lo desordena
const bombo = _.shuffle(_.range(1, MAXBOLAS));

// Sacamos una bola del bombo
export default () => {
  const bola = bombo.pop();
  divBingo.textContent = bola;
  return bola;
}