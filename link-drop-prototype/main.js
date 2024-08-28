
import { setupCounter } from './counter.js'

document.addEventListener('submit', (event) => {
  event.preventDefault();
  const data = new FormData(event.target);
  console.log('Form save', event.target);
  console.log(data.getAll('url').pop(), data.getAll('notes').pop());

});

setupCounter(document.querySelector('#counter'))
