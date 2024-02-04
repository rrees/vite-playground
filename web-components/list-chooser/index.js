import { choose } from './random.js';

class ListChooser extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback() {
		const component = this;
		const button = component.querySelector('.chosen-item-select-button');

		button.addEventListener('click', () => {
			const itemElements = component.querySelectorAll('.list-items > li');
			const items = [];
			itemElements.forEach((el) => items.push(el.innerText));

			const choice = choose(items);

			const display = component.querySelector('.chosen-item-display');
			display.innerHTML = choice;
		});
	}
}

 customElements.define('list-chooser', ListChooser);