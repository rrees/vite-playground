import {resolveCombat, resolveMovement, resolveDiceRoll, resolveDrinkPotion, resolveScroll} from './game.js';
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
		this.maxHealth = 1;
		this.intellect = 0;
		this.potions = 0;
		this.scrolls = 0;
		this.gold = 0;
		this.lockpicks = 0;
	}
}

class GameSheet extends HTMLElement {
	constructor() {
		super();
		this.character = new Character();
	}

	render() {
		const healthDisplay = this.querySelector('#health');
		healthDisplay.value = this.character.health;

		const potionsDisplay = this.querySelector('#potions');
		potionsDisplay.value = this.character.potions;

		for(const [attribute, cssId] of [
			['intellect', '#intellect'],
			['scrolls', '#scrolls'],
			['lockpicks', '#lockpicks'],
			['maxHealth', '#max-health'],
		]) {
			const element = this.querySelector(cssId);
			element.value = this.character[attribute];
		}

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
			display(resolveDrinkPotion(this.character));
			console.log('After', this.character);
			this.render();
		});

		this.querySelector('#spell').addEventListener('click', () => {
			display(resolveScroll(this.character));
			this.render();
		})

		for (const [attribute, cssId] of [
			['health', '#health'],
			['maxHealth', '#max-health'],
			['potions', '#potions'],
			['scrolls', '#scrolls'],
			['lockpicks', '#lockpicks'],

		]) {
			const display = component.querySelector(cssId);

			display.addEventListener('change', (event) => {
				console.log('Before', component.character);
				this.character[attribute]= Number.parseInt(event.target.value);
				console.log('After', component.character);
			});
		}

		this.render();
	}
}

 customElements.define('game-sheet', GameSheet);