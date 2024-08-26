
import { setupCounter } from './counter.js'

document.addEventListener('submit', (event) => {
  event.preventDefault();
  console.log('Form save');
});

setupCounter(document.querySelector('#counter'))
