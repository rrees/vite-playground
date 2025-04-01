import {resolveCombat, resolveMovement, resolveDiceRoll} from './game.js';
import { d } from './random.js';


function displayResults(display, content) {
	display.innerHTML = content;
}

function getButtons(component) {
	return {
		fightButton: component.querySelector('#fight'),
		moveButton: component.querySelector('#move'),
		rollButton: component.querySelector('#roll'),
		drinkButton: component.querySelector('#drink'),
	};
}

class Character {

	constructor() {
		this.health = 1;
		this.potions = 0;
		this.scrolls = 0;
		this.gold = 0;
	}
}

class GameSheet extends HTMLElement {
	constructor() {
		super();
		this.character = new Character();
	}

	render() {
		const component = this;

		const healthDisplay = component.querySelector('#health');
		healthDisplay.value = 1;
	}

	connectedCallback() {
		const component = this;

		const {fightButton, moveButton, rollButton, drinkButton} = getButtons(component);

		const resultsDisplay = component.querySelector('#action-results');

		const display = (content) => {displayResults(resultsDisplay, content)};

		fightButton.addEventListener('click', () => {
			const resultString = resolveCombat();
			display(`<p>${resultString}</p>`);
		});

		moveButton.addEventListener('click', () => {
			display(resolveMovement());
		});

		rollButton.addEventListener('click', () => {
			display(resolveDiceRoll());
		});

		drinkButton.addEventListener('click', () => {
			display('Drink a potion');
		});

		for (const [attribute, cssId] of [['health', '#health']]) {
			const display = component.querySelector(cssId);

			display.addEventListener('change', (event) => {
				console.log(component.character);
				this.character[attribute]= Number.parseInt(event.target.value);
			});
		}

		this.render();
	}
}

 customElements.define('game-sheet', GameSheet);