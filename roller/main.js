import { roll } from './dice.js';

import './style.css'

document.querySelector('#app').innerHTML = `
  <div>
    <h1>Roller</h1>
    <form>
      <div class="stack">
        <div class="cluster roller">
          <div class="stack">
            <label for="pool"l>Pool</label>
            <input
              type="number" min=1 value=1
              id="pool" name="pool"/>
          </div>
          
          <div class="stack">
            <label for="pool"l>Sides</label>
            <input
              type="number" min=2 value=6
              id="sides" name="sides"/>
          </div>
        
          <div class="stack">
            <label for="modifier"l>Modifier</label>
              <input
                type="number" value=0
                id="modifier" name="modifier"/>
          </div>
        </div>
        <button type="submit">Roll!</button>
        <div id="result" class="result"></result>
    </form>
  </div>
`

document.addEventListener('submit', (event) => {
  event.preventDefault();
  console.log(event.target);
  const form = new FormData(event.target);
  console.log('Hello');
  const result = roll(
    Number.parseInt(form.get('pool')),
    Number.parseInt(form.get('sides')),
    Number.parseInt(form.get('modifier'))
  );

  console.log(result);

  document.querySelector('#result').innerHTML = `${result.total}`
});
