import _ from 'lodash';
import { MAXBALLS, MAXITEMS } from './config.js';

// Genera y devuelve un cartón (array) con 15 números aleatorios
export const createCard = (items = MAXITEMS) => {
  const numbers = _.range(1, MAXBALLS);           // Generamos 90 numeros (del 1 al 90)
  const randomNumbers = _.shuffle(numbers);       // Los desordenamos
  return randomNumbers.splice(0, items);          // Devolvemos los 15 primeros
}

// Dibuja el cartón en el elemento del selector CSS indicado
export const showCard = (selector, card) => {
  const divCard = document.querySelector(selector);    // Seleccionamos el cartón
  divCard.innerHTML = '';                              // Vacíamos su contenido (hot-reload)
  for (let i = 0; i < card.length; i++) {
    const num = card[i];
    divCard.innerHTML += `<div class="number number${num}">${num}</div>`;
  }
}

// Tacha el número en los cartones (array cards) donde aparecen
export const strikeNumber = (ball, cards) => {

  const affectedNumbers = document.querySelectorAll(`.number${ball}`);

  // Añadimos la clase "tachado" a los numeros afectados
  for (let i = 0; i < affectedNumbers.length; i++)
    affectedNumbers[i].classList.add('strike');

  // Extraemos el número (ball) de cada uno de los cartones (cards)
  for (let i = 0; i < cards.length; i++)
    _.pull(cards[i], ball);

}

// Comprueba si hay un ganador (asumimos que el primer cartón es el jugador)
export const checkWinner = (cards) => {

  const [playerCard, cpuCard] = cards;

  if ((playerCard.length == 0) && (cpuCard.length == 0)) {
    alert('¡Han empatado!');
    return true;
  }
  else if (playerCard.length == 0) {
    alert('¡Has ganado!');
    return true;
  }
  else if (cpuCard.length == 0) {
    alert('¡Has perdido!');
    return true;
  }

  return false;
}
