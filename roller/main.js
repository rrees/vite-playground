import './style.css'

document.querySelector('#app').innerHTML = `
  <div>
    <h1>Roller</h1>
    <form class="roller">
      <label for="pool"l>Pool</label>
      <input
        type="number" min=1 value=1
        id="pool"/>
      
      <label for="pool"l>Sides</label>
      <input
        type="number" min=2 value=6
        id="sides"/>
    
      <label for="modifier"l>Modifier</label>
        <input
          type="number" value=0
          id="modifier"/>

        <button type="submit">Roll!</button>

    </form>
  </div>
`

setupCounter(document.querySelector('#counter'))
