import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <main>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <div class="card">
      <button id="counter2" type="button"></button>
    </div>
    <p class="read-the-docs">
      <a href="https://vitejs.dev" target="_blank">Vite documentation</a>
    </p>
  </main>
`

setupCounter(document.querySelector('#counter'));
setupCounter(document.querySelector('#counter2'));