import _ from 'lodash';
import { MAXBOLAS, MAXITEMS } from './config.js';

// Genera y devuelve un cartón (array) con 15 números aleatorios
export const createCard = (items = MAXITEMS) => {
  const bolas = _.range(1, MAXBOLAS);            // Generamos 90 bolas
  const bolasDesordenadas = _.shuffle(bolas);    // Las desordenamos
  return bolasDesordenadas.splice(0, items);     // Devolvemos las 15 primeras
}

// Dibuja el cartón en el elemento del selector CSS indicado
export const showCard = (selector, card) => {
  const divCard = document.querySelector(selector);    // Seleccionamos el cartón
  divCard.innerHTML = '';                              // Vacíamos su contenido (hotreload)
  for (let i = 0; i < card.length; i++) {
    const numero = card[i];
    divCard.innerHTML += `<div class="number number${numero}">${numero}</div>`;
  }
}

// Tacha el número (bola) en los cartones (array cards) donde aparecen
export const strikeNumber = (bola, cards) => {

  const affectedNumbers = document.querySelectorAll(`.number${bola}`);

  // Añadimos la clase "tachado" a los numeros afectados
  for (let i = 0; i < affectedNumbers.length; i++)
    affectedNumbers[i].classList.add('strike');

  // Extraemos el número (bola) de cada uno de los cartones (cards)
  for (let i = 0; i < cards.length; i++)
    _.pull(cards[i], bola);

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