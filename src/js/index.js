import _ from 'lodash';
import { createCard, showCard, strikeNumber, checkWinner } from './cards.js';
import newNumber from './bombo.js';

// DOM
const btnNewNumber = document.querySelector('.newNumber');

// Genera los cartones del Jugador y CPU
const playerCard = createCard();
const cpuCard = createCard();

// Muestra los cartones en la página HTML
showCard('.player_card', playerCard);
showCard('.cpu_card', cpuCard);

// Escuchamos los clicks en el botón
btnNewNumber.addEventListener('click', function() {

  const bola = newNumber();                         // Sacamos una bola
  strikeNumber(bola, [playerCard, cpuCard]);        // Tachamos la bola de los cartones

  // Comprueba si hay ganador o no
  if (checkWinner([playerCard, cpuCard]))
    btnNewNumber.remove();

});