import {resolveCombat, resolveMovement, resolveDiceRoll} from './game.js';
import { d } from './random.js';


function displayResults(display, content) {
	display.innerHTML = content;
}


class GameSheet extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback() {
		const component = this;

		const fightButton = component.querySelector('#fight');
		const moveButton = component.querySelector('#move');
		const rollButton = component.querySelector('#roll');

		const resultsDisplay = component.querySelector('#action-results');

		const display = (content) => {displayResults(resultsDisplay, content)};

		fightButton.addEventListener('click', () => {
			const resultString = resolveCombat();
			console.log(resultString);
			display(`<p>${resultString}</p>`);
		});

		moveButton.addEventListener('click', () => {
			display(resolveMovement());
		});

		rollButton.addEventListener('click', () => {
			display(resolveDiceRoll());
		})
	}
}

 customElements.define('game-sheet', GameSheet);